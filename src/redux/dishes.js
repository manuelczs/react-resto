import { DISHES } from '../shares/dishes';
import * as ActionTypes from './ActionTypes';

export const Dishes = (
  state = { isLoading: true, errMess: null, dishes: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        dishes: action.payload,
      };
    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };
    case ActionTypes.DISHES_FAILED:
      return { ...state, isLoading: false, errMess: null, dishes: [] };
    default:
      return state;
  }
};
