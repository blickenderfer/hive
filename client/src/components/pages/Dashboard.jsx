//possibily add a home feed showing reviews?
import { Link } from 'react-router-dom';
export default function Dashboard() {
    return (
        <div className='container'>
        <nav>
            <div className="nav-wrapper">
                <a href="/dashboard" className="title"><h1>Hive</h1></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a><Link to="/games">Games</Link></a></li>
                    <li><a><Link to="/review">Reviews</Link></a></li>
                    <li><a className="waves-effect waves-light btn-small">Logout</a></li>
                </ul>
            </div>
        </nav>
        </div>
    //     <div className="container">
    //     <div className="row">

    //     <div className="col s3 teal lighten-2">
    //         <p>user info here</p>
    //     </div>
  
    //     <div className="col s9 teal darken-2">
    //         <p>game search here</p>
    //     </div>
  
    //   </div>
    //   </div>
        )

}       