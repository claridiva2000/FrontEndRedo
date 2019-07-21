import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.styles.css';


const navbar = ({ placeholder, handleChange }) => {
  return (
    <div className="header">
      <div className="smlogo">
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
      

      <div className="buttons">
       <Link to="/"> Recipes</Link>
      <Link to="/account">Account</Link>
      <Link to="/">log Out</Link>
      </div>
    </div>
  );
};

export default navbar;

