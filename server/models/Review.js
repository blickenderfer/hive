const { Schema, model } = require('mongoose');
const gameSchema = require('./Game');

const reviewSchema = new Schema({
    reviewId: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    game: gameSchema,
});

const Review = model('Review', reviewSchema);

module.exports = Review