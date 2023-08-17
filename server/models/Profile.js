//complete games and review models before finishing this
const {Schema, Model} = require('mongoose');
const bcrypt = require('bcrypt');
const gameSchema = require('./Game');

const profileSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 
    email: {
        type: String,
        required: true, 
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    games: [gameSchema],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        },
    ],
})

const Profile = model('Profile', profileSchema);

module.exports = Profile 