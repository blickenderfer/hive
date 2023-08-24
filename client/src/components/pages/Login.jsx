import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = function(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      //console.log(error)
      console.error(e);
  
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

    return (
        <>
            <div className="row login-card">
                <div>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Log In</span>
                            <div className="row">
                                <form className="col s12" onSubmit={handleFormSubmit}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                                <input id="email" type="email" className="validate" value={formState.email} name="email" onChange={handleChange}/>
                                                <label for="email">Email</label>
                                                <span className="helper-text" data-error="wrong" data-success="right"></span>
                                        </div>
                                        <div className="input-field col s12">
                                                <input id="password" type="password" className="validate" value={formState.password} name="password" onChange={handleChange}/>
                                                <label for="password">Password</label>
                                                <span className="helper-text" data-error="wrong" data-success="right"></span>
                                            </div>
                                    </div>
                                    <button type="submit">Log In</button>
                                </form>
                            </div>
                        </div>
                        <div className="card-action">
                            <p>New User?</p>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login