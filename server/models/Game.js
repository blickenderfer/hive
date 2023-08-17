//when searching a game show reviews? mayb??
const { Schema } = require('mongoose');

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    developers: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    }
});

module.exports = gameSchema