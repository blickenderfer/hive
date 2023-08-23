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
    <>
      <div className="row login-card">
        <div>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Sign Up</span>
              <div className="row">
                <form className="col s12" onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" name="email" value={formState.email} className="validate" onChange={handleChange} />
                      <label for="email">Email</label>
                      <span className="helper-text" data-error="wrong" data-success="right"></span>
                    </div>
                    <div className="input-field col s12">
                      <input id="username" type="username" name="username" value={formState.username} onChange={handleChange} />
                      <label for="username">Username</label>
                      <span className="helper-text" data-error="wrong" data-success="right"></span>
                    </div>
                    <div className="input-field col s12">
                      <input id="password" type="password" name="password" value={formState.password} className="validate" onChange={handleChange} />
                      <label for="password">Password</label>
                      <span className="helper-text" data-error="wrong" data-success="right"></span>
                    </div>
                  </div>
                  <button type="submit">Log In</button>
                </form>
              </div>
            </div>
            <div className="card-action">
              <p>Already have an account?</p>
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Signup;