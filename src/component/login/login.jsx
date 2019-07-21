import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import './login.styles.css';
// import Validator from 'validator';
// import InlineError from '../messages/InlineError';
// import Axios from 'axios';

const Login = () => {
  const [formData, setFormDate] = useState({
    email: '',
    password: '',
   
  });

  const { email,password } = formData;


 const onChange = e => setFormDate({...formData, [e.target.name]: e.target.value });

const onSubmit = async e=> { e.preventDefault();
if (password.length === 0) {
  console.log('Please enter a password')
} else  {
 console.log('success') }
}
    return (
      <Fragment>
      <div className="login">
        <div className="login-container">
          <div className="logo">
            <img
              className="hat"
              src="https://files.slack.com/files-pri/T4JUEB3ME-FL404HDB5/logo.jpg"
              alt="chefhat"
            />
            <div>
              <h1>Chef</h1>
              <h2>Portfolio</h2>
            </div>
          </div>
          <form onSubmit={e=>onSubmit(e)}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={e=>onChange(e)}
              value={email}
            />
            {/* {errors.email && <InlineError text={errors.email} />} */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={e=>onChange(e)}
              value={password}
            />
            {/* {errors.password && <InlineError text={errors.password} />} */}
            <p>No account yet?  <Link to='/register'>Create an Account!</Link></p>
            <div className='submit'><button type="submit">Login</button> <p><Link to='/'>Cancel</Link></p></div>
          </form>
        </div>
      </div>
      </Fragment>
    );
  }


export default Login;
