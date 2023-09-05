import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { DELETE_GAME } from '../../utils/mutations';

import { QUERY_ME, GET_FAV } from '../../utils/queries'

import Auth from '../../utils/auth'



const Profile = () => {
    const [deleteSaveGame, { error, data2 }] = useMutation(DELETE_GAME);
    const navigate = useNavigate();



    const deleteGame = async (_id) => {
        console.log("deleting game", _id);

        deleteSaveGame({
            variables: {
                _id: _id
            }
        })
        window.location.reload()
    }
    const { profileId } = useParams();
    const { data, refetch } = useQuery(GET_FAV);


    const { data: user } = useQuery(QUERY_ME, { fetchPolicy: "no-cache" })
    const userData = user?.me || {}
    console.log(userData)
    console.log("what is data", data)

    useEffect(() => {
        refetch()
    })

    return (
        <>

            <div className="white-text">
                <div className="userinfo">
                    <p className="user-greeting center-align">Hi, {userData.username}! View your saved games here.</p>
                </div>
                <div className="col s12">
                    {data !== undefined && (
                        <div className="row">
                            {data.getFavorites.map(d => (
                                <div key={d.id} className="col s12 m6">
                                    <div className="card blue-grey darken-1 game-card">
                                        <div className="card-content white-text">
                                            <span className="card-title game-name">{d.title}</span>
                                            <span className="card-title release-date whitbtm">Released {d.released}</span>
                                            <span className='card-title game-id'>{d.id}</span>
                                            {
                                                d.review && <span className='card-title game-review'>{d.review}</span>
                                            }
                                            
                                            <button className='deletebtn btnspace col s3 offset-s3 botpad' id="deletebtn" onClick={(e) => {
                                                deleteGame(d._id)
                                            }}>Remove from Favorites</button>

                                            <button className='col s3' onClick={() => navigate(`/review/${d._id}`)}>Add a Review</button>
                                        </div>
                                    
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )

}

export default Profile;