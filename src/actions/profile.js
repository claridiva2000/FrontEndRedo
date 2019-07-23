import axios from 'axios';
import {setAlert} from './alert';
import {GET_PROFILE, PROFILE_ERROR,GET_RECIPES, RECIPE_ERROR} from './types';


//GET current Chef's profile

export const getCurrentProfile = () => async dispatch =>{
  try{
    const res = await axios.get('https://chefportfoliofinal.herokuapp.com/chefs')

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch(err) {

    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }

};

export const getRecipeList = () => async dispatch =>{
  try{
    const res = await axios.get('https://chefportfoliofinal.herokuapp.com/recipes')

    dispatch({
      type: GET_RECIPES,
      payload: res.data
    });
  } catch(err) {

    dispatch({
      type: RECIPE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }

};