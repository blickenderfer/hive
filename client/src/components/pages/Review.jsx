
//Add function to take data and add to user's profile on button click!
//ask for help?
// import React, { useState } from 'react';

// const ReviewForm = ({ onSubmit }) => {
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState ('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const review = {
//             rating, 
//             comment,
//         };

//         return (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Rating:</label>
//                     <input
//                     type="number"
//                     min="1"
//                     max="5"
//                     value={rating}
//                     onChange={(e) => setRating(parseInt(e.target.value))}/>
//                 </div>
//                 <button type="submit">Submit Review</button>
//             </form>
//         )
//     }
// };

// export default ReviewForm;



export default function Review() {
    return (
        <>
            <div className='section center-align'>
                <h1 className="">Write a review for *game.name?*</h1>
            </div>
            <div className="section row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 offset-s3">
                            <label for="profile-name">Enter your username</label>
                            <input id="profile-name" type="text" className="validate"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 offset-s3">
                            <label for="review-desc">Whatcha think?</label>
                            <textarea className="materialize-textarea" id="review-desc"></textarea>
                        </div>
                    </div>
                    <div className="row center-align">
                        <button type="submit">Submit!</button>
                    </div>
                </form>
            </div>
        </>
    )
}



