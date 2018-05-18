const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// let newTodo = new Todo({
//     text: 'make dinner',

// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log(`${e.name}: ${e.message}`);
// });

module.exports = {Todo};