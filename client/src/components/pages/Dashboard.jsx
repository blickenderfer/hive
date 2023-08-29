//possibily add a home feed showing reviews?
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { ALL_GAMES } from '../../utils/queries';

export default function Dashboard() {

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
                    <img src="https://placehold.co/100x100"></img>
                    <h3>Welcome, Username</h3>
                    <a><Link to="/games">Games</Link></a>
                    <br />
                    <a><Link to="/reviews">Reviews</Link></a>
                    <br />
                    <a><Link to="/friends">Friends</Link></a>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat expedita labore quas, iusto corporis libero harum eveniet beatae consectetur neque illum et aliquid sit? Repellat unde possimus, sapiente quod id officia iusto ad alias ea, mollitia veritatis natus illum fugiat.
                </div>

                {/* will need a Games, Reviews, Friends page to match up with the links above. games page will be the games added to collection, Reviews will be a list of games you and/or your friends have reviewed, Friends is a list of users that are your "friends".  Change the h3 with Welcome, Username to Welcome {user.userName}  In the games page need each card to contain a button to add a review and a maybe a dropdown to show all reviews on the games.  Reviews will need to have cards with the game title and then associated reviews and a textbox to add review, and users should be able to delete their own review.  friends page should be a card for each friend, render user map function.  include delete friend button and maybe just a count of how many games they have added and how many reviews they have left */}

                <div className="col s9 game-search-section">
                    <div className="input-field col s6">

                        <input placeholder="Search Games" id="game-search" type="text" class="validate" onChange={(e => setSearch(e.target.value))} />
                        <button onClick={searchHandler}>Search Games</button>

                    </div>



                </div>
                <div className="col s9">
                {data !== undefined && query !== '' && (
                    <div className="row">
                        {data.getVideoGames.map(game => (
                            <div key={game.id} className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{game.title}</span>
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