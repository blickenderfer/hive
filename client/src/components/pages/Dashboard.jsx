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

                <div className="col s9 game-search-section">
                    <div class="input-field col s6">

                        <input placeholder="Search Games" id="game-search" type="text" class="validate" onChange={(e => setSearch(e.target.value))} />
                        <button onClick={searchHandler}>Search Games</button>

                    </div>



                </div>
                <div>
                    {
                        data != undefined && query != "" && data.getVideoGames.map(d => {
                            return <div>{d.title}</div>
                        }
                        )
                    }

                </div>

            </div>


        </>


    )

}       