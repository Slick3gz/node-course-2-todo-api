// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    
    db.collection('Todos').deleteMany({}).then((result) => {
        console.log(result);
    });
    db.collection('Users').deleteMany({}).then((result) => {
        console.log(result);
    });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Chad Tyler'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({_id: ObjectID('5afb850bcc5c4931f43706fe')}).then((result) => {
    //     console.log(result);
    // });
    // db.close();
});