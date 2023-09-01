import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { QUERY_ME, GET_FAV } from '../../utils/queries'

import Auth from '../../utils/auth'

const Profile = () => {
    const { profileId } = useParams();
    const { data } = useQuery(GET_FAV);

    console.log("what is data", data)
    return (
        <>
        <div className="white-text">
        <div className="userinfo">
        <p className="user-greeting">Hi, Username! View your saved games here.</p>
        </div>
            {
                data !== undefined && data.getFavorites.map(d => {
                    return <div>{d.title} {d.released}</div>
                })
            }

            <div className="col s9">
                {data !== undefined && (
                    <div className="row">
                        {data.getFavorites.map(d => (
                            <div key={d.id} className="col s12 m6">
                                <div className="card blue-grey darken-1 game-card">
                                    <div className="card-content white-text">
                                        <span className="card-title game-name">{d.title}</span>
                                        <span className="card-title release-date">Released {d.released}</span>
                                        <span className='card-title game-id'>{d.id}</span>
                                        <button className='deletebtn' id="deletebtn" onClick={(e) => {
                                            handleSaveGame(game)
                                        }}>Remove from Favorites</button>
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