const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove('5b004705feaa51ecc1dab2ca').then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5b004705feaa51ecc1dab2ca').then((result) => {
//     console.log(JSON.stringify(result, undefined, 2));
// });