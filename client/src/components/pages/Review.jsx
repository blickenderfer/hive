//Add function to take data and add to user's profile on button click!
//ask for help?

export default function Review() {
    return (
        <>
            <div className='section center-align'>
                <h1 className="">Write a review for *game.name?*</h1>
            </div>
            <div className="section row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 offset-s3">
                            <label for="profile-name">Enter your username</label>
                            <input id="profile-name" type="text" className="validate"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 offset-s3">
                            <label for="review-desc">Whatcha think?</label>
                            <textarea className="materialize-textarea" id="review-desc"></textarea>
                        </div>
                    </div>
                    <div className="row center-align">
                        <button type="submit">Submit!</button>
                    </div>
                </form>
            </div>
        </>
    )
}