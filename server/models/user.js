const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true, 
        minlength: 1,
        trim: true
    }
});

// let newUser = new User({
//     email: '        fred@thedog.org     '
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log(`${e.name}: ${e.message}`);
// });

module.exports = {User};