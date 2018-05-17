// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5afce8c63f0a26dceb34b5ec')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    // db.close();

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('5afb3e4156dd192b6dede47a')
    }, {
        $set: {
            name: 'Chad Tyler'
        },
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});