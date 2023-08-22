import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(SIGNUP_USER);

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
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

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
                        <p>Already have an account?</p>
                        <a href="#">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    </>
)

}

export default Signup;