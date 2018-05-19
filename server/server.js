const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Valid id using isValid
    if(!ObjectID.isValid(id)){
        // 404 - send back empty send
        return res.status(404).send();
    }

    // findById
    Todo.findById({
        _id: id
    }).then((todo) =>{
    // success
        if(!todo){
            // no todo send back 404
            return res.status(404).send();
        }
            // send back todo
            res.send({todo});
        
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    // get the id
    var id = req.params.id;

    // Valid id using isValid
    if(!ObjectID.isValid(id)){
        // 404 - send back empty send
        return res.status(404).send();
    }
    // remove todo by id
    Todo.findByIdAndRemove(id).then((doc) => {
        // if sucess but no doc
        if(!doc){
            // return 404
            return res.status(404).send();
        }
        // sucess - send back with 200
        res.status(200).send({doc});
    }, (e) => {
        // return error
        return res.status(400).send(e);
    })
    // remove todo by id
        // success
            // if no doc, send 404
            // if doc, send back with 200
        // error
            // 400 with empty body
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        // 404 - send back empty send
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })


})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};
