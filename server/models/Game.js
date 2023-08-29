// //when searching a game show reviews? mayb??
const { Schema } = require('mongoose');

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
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

