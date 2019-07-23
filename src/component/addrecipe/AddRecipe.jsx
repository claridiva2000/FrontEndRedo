import React, { Fragment, useState } from 'react';
//Router
import { Link } from 'react-router-dom';
//connect redux
import { connect } from 'react-redux';
//from actions

//style
import './addrecipe.styles.css';
//proptypes- shortcut 'impt'
// import PropTypes from 'prop-types';

const AddRecipe = () => {
  const [formData, setFormDate] = useState({
    picture: '',
    name: '',
    ingredients: '',
    description: '',
    breakfast: false,
    lunch: false,
    dinner: false,
    dessert: true,
    snack: false
  });

  const {
    picture,
    name,
    ingredients,
    description,
    breakfast,
    lunch,
    dinner,
    dessert,
    snack
  } = formData;

  const onChange = e =>
    setFormDate({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
  };

  const onToggle = e => {
    e.preventDefault();
  };

  return (
    <div className="addrecipe">
      <form onSubmit={e => onSubmit(e)} className="addform">
        <input
          type="picture"
          placeholder="picture url"
          name="picture"
          onChange={e => onChange(e)}
          value={picture}
          style={{ width: '400px' }}
        />
        <input
          type="name"
          placeholder="Recipe Name"
          name="name"
          onChange={e => onChange(e)}
          value={name}
          style={{ width: '400px' }}
        />
        <input
          type="ingredients"
          placeholder="ingredients"
          name="ingredients"
          onChange={e => onChange(e)}
          value={ingredients}
          style={{ width: '400px' }}
        />
        <input
          type="description"
          placeholder="description"
          name="description"
          onChange={e => onChange(e)}
          value={description}
          style={{ width: '400px' }}
        />

        <button type='submit' style={{minWidth:'400px'}}>Add Recipe</button>
      </form>
    </div>
  );
};

AddRecipe.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(AddRecipe);
