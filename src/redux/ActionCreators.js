import { ADD_COMMENT } from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
  type: ADD_COMMENT,
  payload: { dishId, rating, author, comment },
});
