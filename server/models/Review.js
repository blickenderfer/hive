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


// module.exports = Review

//add component for adding a review, put a fetch request for game names (possibily onClick on a dropdown for the review?) add review button adds review to the server w/the review schema, and post it to user profile?
//will work on later today brain small

import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const review = {
            rating, 
            comment,
        };

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Rating:</label>
                    <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value))}/>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        )
    }
};

export default ReviewForm;

