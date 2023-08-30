import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = function () {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(SIGNUP_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data)
      console.log(error)
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <div className='flex-column justify-flex-start min-100-vh logPgs'>
      <div className="row login-card">
        <div>
          <div className="card loginsignup">
            <div className="card-content black-text loginsignup-content">
              <span className="title login-signup-title">Sign Up</span>
              <div className="row">
                <form className="col s12" onSubmit={handleFormSubmit}>
                  <div className="row">

                    <div className="input-field col s12">
                      <input id="email" type="email" name="email" value={formState.email} className="validate" onChange={handleChange} />
                      <label for="email" className="white-text">Email</label>
                      <span className="helper-text" data-error="wrong" data-success="right"></span>
                    </div>

                    <div className="input-field col s12">
                    <label for="username" className="white-text">Username</label>
                      <input id="username" name="username" type="text" value={formState.username} className="validate" onChange={handleChange} />
                      <span className="helper-text" data-error="wrong" data-success="right"></span>
                    </div>

                    <div className="input-field col s12">
                      <input id="password" type="password" name="password" value={formState.password} className="validate" onChange={handleChange} />
                      <label for="password" className="white-text">Password</label>
                      <span className="helper-text" data-error="wrong" data-success="right"></span>
                    </div>

                  </div>
                  <button type="submit"className="login-signup-button white-text">Log In</button>
                </form>
              </div>
            </div>
            <div className="signup-login-links">
              <p className="white-text">Already have an account?</p>
              <div className="signup-link">
                <Link to="/login" className="yellow-text signup-link">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Signup;