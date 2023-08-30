import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Header({ handlePageChange }) {
    return (
        <> 
      <nav>
            <div className="nav-wrapper">
                <a href="/dashboard" className="brand-logo"><span className='title pleft'>Hive</span></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
                    <li><a><Link to="/profile">Profile</Link></a></li>
                    <li><a><Link to="/review">Reviews</Link></a></li>
                    {Auth.loggedIn() ? ( <li><a className="waves-effect waves-light btn-small" onClick={Auth.logout}>Logout</a></li> ) : (<li><a className="waves-effect waves-light btn-small"><Link to="/login">Login</Link></a></li> )}
                </ul>
                </div>
            </nav>
        </>
    )
}

