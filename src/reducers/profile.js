import { GET_PROFILE, PROFILE_ERROR, GET_RECIPES, RECIPE_ERROR } from '../actions/types';

const initialState = {
  chef:{},
  recipes: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        chef: payload,
        loading: false
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

      case GET_RECIPES:
        return{
          ...state,
          recipes:payload,
          loading:false
        }

      case RECIPE_ERROR:
        return {
          ...state,
          error:payload,
          loading:false
        }

    default:
      return state;
  }
}
