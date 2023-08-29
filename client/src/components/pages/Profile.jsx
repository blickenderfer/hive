import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../../utils/auth';
import Auth from '../../utils/auth'

const Profile = () => {
    const { profileId } = useParams();

    const { loading, data } = useQuery(
        profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
            {
                variables: { profileId: profileId},
            }
    );

            //ME needs to be changed to route to user profile above and below 

    const profile = data?.me || data?.profiile || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        return <Navigate to='/me' />;
    }

    if (loading) {
        return <div>Loading... </div>
    }

    if (!profile?.name) {
        return ( 
            <h4>
                You need to be logged in to see a user's profile!
            </h4>
        );
    }

    return (
        <div></div>
    )
     
    function addedGames(){
        const [favorites, setFavorites] = useState([]);
        const addToFaves = (item) => {
            setFavorites([...favorites, item]);
        }
    };
    
}

export default Profile;