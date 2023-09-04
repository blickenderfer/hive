
//possibily add a home feed showing reviews?
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import { ALL_GAMES, QUERY_ME } from '../../utils/queries';
import {  SAVE_GAME } from '../../utils/mutations';
import Auth from '../../utils/auth';
import space from "../../assets/space.gif";






export default function Dashboard() {

    
    const { data: user } = useQuery(QUERY_ME, { fetchPolicy: "no-cache" })
    const userData = user?.me || {}
    console.log(userData)


    
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")
    const { data, loading, error, refetch, fetchMore } = useQuery(ALL_GAMES, {
        variables: {
            title: query
        }
    });

    const [saveToFavorites, { error2, data2 }] = useMutation(SAVE_GAME);
    
      

    //OnClick for saving specific games to a profile
    const handleSaveGame = async ({ id, title, released }) => {
       

        console.log("adding to favorites:", id, title, released)

        saveToFavorites({
            variables: {
                id: id,
                title: title,
                released: released
            }

        })
        console.log("did we save?", data2)

    };

    const searchHandler = () => {
        console.log(search);
        setQuery(search);
        refetch()


    }

    return (
        <>
            <div className="row">
 
                <div className="col s3 user-section">
                   
                    <h2>Welcome, {userData.username}</h2>
                    <p>Browse games to review here.</p>
                    <div className="spaceBox ">
            <img className="spaceGif" src={space} alt="space-invader" />
          </div>
                </div>
                <div className="col s9 game-search-section">
                    <div className="input-field col s6">
                {/*This code takes the value of the input box, and searches the api w/it */}
                        <input placeholder="Find Games" id="game-search" type="text" className="validate white-text" onChange={(e => setSearch(e.target.value))} />
                        <button className="search-button" onClick={searchHandler}>Search</button>
                    </div>
                </div>
                {/* this code put the results into cards  */}
                <div className="col s9">
                    {data !== undefined && query !== '' && (
                        <div className="row">
                            {data.getVideoGames.map(game => (
                                <div key={game.id} className="col s12 m6">
                                    <div className="card blue-grey darken-1 game-card">
                                        <div className="card-content white-text">
                                            <span className="card-title game-name">{game.title}</span>
                                            <span className="card-title release-date">Released {game.released}</span>
                                            <span className='card-title game-id'>{game.id}</span>
                                            <button className='addgamebtn' id="savebtn" onClick={(e) => {
                                                handleSaveGame(game)
                                            }}>Save to favourites</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}