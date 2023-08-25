import { Link } from 'react-router-dom';
//notes: needs better spacing between elements, want lines 15-18 further down the page, with the header and subheader (lines 8-11) in the center. Overall work in progress 
//backgound image is a placeholder for now
export default function Homepage() {
    return (
        <>
        <div className='homeBg'>
            <div className='valign-wrapper row'>
                <div className='col s12'><h1 className='center-align title'>Welcome to Hive!</h1></div>
                </div>
                <div className='row'>
                <div className='col s12'><h5 className='center-align title'>Your one stop shop for game reviews and guides</h5></div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <h5 className='white-text center-align'>New to Hive? Here's a quick guide</h5>
                <p className='white-text col s4 center-align'>Hive is a spot where gamers are welcomed to come and share their ideas & opinions about the games we love!</p>
                <p className='col s4 white-text center-align'>Once you create an account, you can add friends, select your favourite games, and let the world hear your piece!</p>
                <p className='col s4 white-text center-align'>So <a><Link to="/login">login here</Link></a> or up top, and get your game on!</p>
              </div>
            </div>
        </div>
    </>
    )
}