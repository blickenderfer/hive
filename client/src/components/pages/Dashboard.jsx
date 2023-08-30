import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import { ALL_GAMES } from '../../utils/queries';
import { SAVE_GAME } from '../../utils/mutations';
import Auth  from '../../utils/auth';
import { getSavedGameIds, saveGameIds } from '../../utils/gameSave';

export default function Dashboard() {

const searchedGames = () => {
    const [ searchedGames, setSearchedGames ] = useState([]) 

    const [ searchInput, setSearchInput ] = useState('');

    const [saveGame, { error:saveError }] = useMutation(SAVE_GAME);

    useEffect(() => {
        return () => saveGameIds(savedGameIds)
    })
}

    const handleSaveGame = async (gameId) => {
        const gameToSave = searchedGames.find((game) => game.gameId === gameId);
        const token = Auth.loggedin() ? Auth.getToken : null;
        if (!token) {
            return false;
        }
        try {
            const { data } = await saveGame({
                variables: {gameData: {...gameToSave} },
            });
            console.log(gameToSave);
            setSavedGameIds([...saveGame, gameToSave.gameId]);
        } catch (err) {
            console.error(err);
        }
    };


    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")
    const { data, loading, error, refetch, fetchMore } = useQuery(ALL_GAMES, {
        variables: {
            title: query
        }
    });

    const searchHandler = () => {
        console.log(search);
        setQuery(search);
        refetch()


    }

    return (
        <>
            {/* <div class="input-field col s12">
          <input id="search" type="search"/>
          <label>Game Search</label>
          <span class="helper-text" data-error="wrong" data-success="right"></span>
          <button class="search-submit" type="submit">Search</button>
          </div>

        <div>
        <label>Review Title</label>
          <input id="search" type="search"/>
          <span class="helper-text" data-error="wrong" data-success="right">Review</span>
          <textarea></textarea>
          <button class="review-submit" type="submit">Submit</button>
        </div> */}

            <div className="row">

                <div className="col s3 user-section">
                    <h2>Welcome</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae magnam deserunt illo amet possimus minus nihil optio! Velit, mollitia dolor laborum asperiores omnis neque odio voluptatum maiores odit cupiditate vel doloribus, totam, quidem harum eius! Minus modi adipisci ipsam sequi illum nihil quidem ut, suscipit nulla repellendus excepturi voluptatum consequuntur distinctio quis ducimus cum eos accusamus soluta eum laboriosam ad doloremque? Assumenda, error culpa? Debitis molestiae iste reiciendis provident?</p>
                </div>

                {/* will need a Games, Reviews, Friends page to match up with the links above. games page will be the games added to collection, Reviews will be a list of games you and/or your friends have reviewed, Friends is a list of users that are your "friends".  Change the h3 with Welcome, Username to Welcome {user.userName}  In the games page need each card to contain a button to add a review and a maybe a dropdown to show all reviews on the games.  Reviews will need to have cards with the game title and then associated reviews and a textbox to add review, and users should be able to delete their own review.  friends page should be a card for each friend, render user map function.  include delete friend button and maybe just a count of how many games they have added and how many reviews they have left */}

                <div className="col s9 game-search-section">
                    <div className="input-field col s6">

                        <input placeholder="Find Games" id="game-search" type="text" className="validate white-text" onChange={(e => setSearch(e.target.value))} />
                        <button  className="search-button"onClick={searchHandler}>Search</button>

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
                                            handleSaveGame(game.id)
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
  );}