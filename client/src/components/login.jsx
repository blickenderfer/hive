export default function Login() {
    return (
        <>
            <div class="row login-card">
                <div>
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Log In</span>
                            <div class="row">
                                <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col s12">
                                                <input id="email" type="email" class="validate" />
                                                <label for="email">Email</label>
                                                <span class="helper-text" data-error="wrong" data-success="right"></span>
                                        </div>
                                        <div class="input-field col s12">
                                                <input id="password" type="password" class="validate" />
                                                <label for="password">Password</label>
                                                <span class="helper-text" data-error="wrong" data-success="right"></span>
                                            </div>
                                    </div>
                                    <button type="submit">Log In</button>
                                </form>
                            </div>
                        </div>
                        <div class="card-action">
                            <p>New User?</p>
                            <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}