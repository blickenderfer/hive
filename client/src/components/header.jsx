import { Link } from 'react-router-dom';
//fix navbar aubrey wtf idiot
export default function Header({ handlePageChange }) {
    return (
        <>
        <nav className-="navbar">
            <div className="nav-wrapper">
                <h1 className='title'><a href="/dashboard" className="title">hive</a></h1>
                
                <ul className="right hide-on-med-and-down nav-links">
                    <li><a><Link to="/games">Games</Link></a></li>
                    <li><a><Link to="/review">Reviews</Link></a></li>
                    <li><a className="waves-effect waves-light btn-small">Logout</a></li>
                </ul>
                </div>
        </nav>
        </>
    )
}

