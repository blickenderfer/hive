import { Link } from 'react-router-dom';
export default function Homepage() {
    return (
        <>
            <div className='homeBg'>
                <div className='section'>
                    <div className='valign-wrapper row'>
                        <div className='col s12'><h1 className='center-align title'>Welcome to Hive!</h1></div>
                    </div>
                    <div className='row'>
                        <div className='col s12 botpad'><h5 className='center-align white-text'>Your one stop shop for game reviews and guides</h5></div>
                    </div>
                </div>
                <div className='section'>
                    <div className='row'>
                        <div className='col s12'>
                            <h3 className='title center-align'>New to Hive? Here's a quick guide</h3>
                        </div>
                        <div className='section'>
                        <div className='col s2 offset-s3 test center-align toppad testbg'>
                            <h6 className='homepageST title'>A place for gamers</h6>
                            <p className='white-text infotext'>Hive is a spot where gamers are welcomed to come and share their ideas & opinions about the games we love!</p>
                        </div>
                        <div className='col s2 center-align toppad testbg'>
                            <h6 className='homepageST title'>A place for community</h6>
                            <p className='white-text infotext'>Once you create an account, you can add friends, select your favourite games, and let the world hear your piece!</p>
                        </div>
                        <div className='col s2 center-align toppad testbg'>
                            <h6 className='homepageST title'>A place for you!</h6>
                            <p className='white-text infotext'>So <a><Link to="/login">login here</Link></a> or up top, and get your game on!</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}