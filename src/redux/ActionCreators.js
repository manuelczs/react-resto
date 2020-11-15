import {
  ADD_COMMENT,
  ADD_DISHES,
  DISHES_FAILED,
  DISHES_LOADING,
} from './ActionTypes';
import { DISHES } from '../shares/dishes';

export const addComment = (dishId, rating, author, comment) => ({
  type: ADD_COMMENT,
  payload: { dishId, rating, author, comment },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ADD_DISHES,
  payload: dishes,
});
