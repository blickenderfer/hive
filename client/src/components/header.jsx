import { Link } from 'react-router-dom';
//fix navbar aubrey wtf idiot
export default function Header({ handlePageChange }) {
    return (
        <>
        <nav>
            <div className="nav-wrapper">
                <h1 className='title'><a href="/dashboard" className="title">Hive</a></h1>
                </div>
                <ul className="right hide-on-med-and-down">
                    <li><a><Link to="/games">Games</Link></a></li>
                    <li><a><Link to="/review">Reviews</Link></a></li>
                    <li><a className="waves-effect waves-light btn-small">Logout</a></li>
                </ul>
        </nav>
        </>
    )
}

