import { Link } from 'react-router-dom';
//fix navbar aubrey wtf idiot
export default function Header({ handlePageChange }) {
    return (
        <>
        <nav>
            <div className="nav-wrapper">
                <a href="/dashboard" className="title brand-logo">Hive</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a><Link to="/games">Games</Link></a></li>
                    <li><a><Link to="/review">Reviews</Link></a></li>
                    <li><a className="waves-effect waves-light btn-small">Logout</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

