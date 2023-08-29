const { Schema } = require('mongoose');

const gameSchema = new Schema({
    gameId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    released: {
        type: String,
        required: false,
    },
    genre: {
        type: String,
    },
    platforms: {
      type: String,  
    }
});

module.exports = gameSchema

