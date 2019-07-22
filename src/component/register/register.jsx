import React, { Fragment, useState } from 'react';
//connect redux
import { connect } from 'react-redux';
//from actions
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
//router
import { Link } from 'react-router-dom';
//style
import './register.styles.css';
//validation
// import Validator from 'validator';
// import InlineError from '../messages/InlineError';
//axios
// import Axios from 'axios';
//proptypes- shortcut 'impt'
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
  const [formData, setFormDate] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    location: '',
    profilepic: ''
  });

  const {
    email,
    password,
    firstname,
    lastname,
    location,
    profilepic
  } = formData;

  const onChange = e =>
    setFormDate({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password.length === 0) {
      setAlert('Password cannot be blank', 'danger');
    } else {
      register({ email, password, firstname, lastname, location });
    }
  };

  return (
    <Fragment>
      <div className="register">
        <div className="register-container">
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

          <form onSubmit={e => onSubmit(e)}>
            <input
              type="text"
              placeholder="*First Name"
              name="firstname"
              onChange={e => onChange(e)}
              value={firstname}
            />
            {/* {errors.firstname && <InlineError text={errors.firstname} />} */}

            <input
              type="text"
              placeholder="*Last Name"
              name="lastname"
              onChange={e => onChange(e)}
              value={lastname}
            />
            {/* {errors.lastname && <InlineError text={errors.lastname} />} */}

            <input
              type="text"
              placeholder="*location"
              name="location"
              onChange={e => onChange(e)}
              value={location}
            />
            {/* {errors.location && <InlineError text={errors.location} />} */}

            <input
              type="text"
              placeholder="Profile Picture URL"
              name="profilepic"
              onChange={e => onChange(e)}
              value={profilepic}
            />

            <input
              type="email"
              placeholder="*Email"
              name="email"
              onChange={e => onChange(e)}
              value={email}
            />
            {/* {errors.email && <InlineError text={errors.email} />} */}

            <input
              type="text"
              placeholder="*Password"
              name="password"
              onChange={e => onChange(e)}
              value={password}
            />
            {/* {errors.password && <InlineError text={errors.password} />} */}

            <p>
              Already registered? <Link to="/login">Login Here!</Link>
            </p>
            <div className="submit">
              <button type="submit">Register</button>{' '}
              <p>
                <Link to="/">Cancel</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(Register);
