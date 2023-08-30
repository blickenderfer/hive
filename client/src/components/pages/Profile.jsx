import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { QUERY_ME } from '../../utils/queries'
import Auth from '../../utils/auth'

const Profile = () => {
    const { profileId } = useParams();

    const { loading, data } = useQuery( QUERY_ME
        // profileId ? QUERY_PROFILE : QUERY_PROFILE,
            // {
            //     variables: { username: "pandas19" },
            // }
    );

            //ME needs to be changed to route to user profile above and below 

    // const profile = data || {};
    const username = data?.me.username || ""
    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        return <Navigate to='/profile' />;
    }

    if (loading) {
        return <div>Loading... </div>
    }
    // else {
    //     return <div>
    //         {console.log(profile)}
    //     </div>
    // }

    // if (!profile?.username) {
    //     return ( 
    //         <h4>
    //             You need to be logged in to see a user's profile!
    //         </h4>
    //     );
    // }

    return (
        <div className="white-text">
            <p >{username}</p>

            {/* <p>{profile.userProfile.games}</p> */}
            {/* {profile.games.map(game => {
                return <p>{game.title}</p>
            })} */}
        </div>
    )

}

export default Profile;