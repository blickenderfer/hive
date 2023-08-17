const { Schema, model } = require('mongoose');
const gameSchema = require('./Game');

const reviewSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    game: gameSchema,
});

const Review = model('Review', reviewSchema);

module.exports = Review