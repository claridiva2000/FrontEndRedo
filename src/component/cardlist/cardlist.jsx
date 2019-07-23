import React from 'react';
import Card from '../card/card';
import './cardlist.styles.css';

const cardlist = props => {
  console.log(props.recipes)
  return (
    <div className="cardlist">
      {props.recipes.map(recipe => (
        <Card key={recipe._id} recipe={recipe}/>
      ))}
    </div>
  );
};

export default cardlist;
