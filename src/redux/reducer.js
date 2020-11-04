import { DISHES } from '../shares/dishes';
import { COMMENTS } from '../shares/comments';
import { LEADERS } from '../shares/leaders';
import { PROMOTIONS } from '../shares/promotions';

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
