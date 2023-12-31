import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_REVIEW } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';


export default function Review() {
    const { id } = useParams();
    const navigate = useNavigate();

    console.log("prams id", id)
    const [addReview, { error, data2 }] = useMutation(ADD_REVIEW);
    const [textarea, setTextarea] = useState("")

    const reviewHandler = (e) => {
        e.preventDefault();
        console.log("submit review", id, textarea)
        addReview({
            variables: {
                id: id,
                text: textarea
            }
        })

        navigate("/profile")

    }

    return (
        <>
            <div className='section center-align'>
                <h1 className="white-text">Write a review</h1>
            </div>
            <div className="section row ">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 offset-s3">
                            <label for="review-desc">Whatcha think?</label>
                            <textarea style={{ color: "white" }} className="materialize-textarea" id="review-desc" value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>

                        </div>
                    </div>
                    <div className="row center-align">
                        <button type="submit" className='submit-button' onClick={reviewHandler}>Submit!</button>
                    </div>
                </form>
            </div>
        </>
    )
}



