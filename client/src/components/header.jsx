import { Link } from 'react-router-dom';

export default function Header({ handlePageChange }) {
    return (
        <>
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
        </>
    )
}

