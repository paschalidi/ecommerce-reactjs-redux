/*
 *
 * BasketCardsRenderer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';
import {
  ADD_ITEM,
} from '../ShoppingCard/constants';
import {
  DELETE_ITEM,
} from '../BasketCard/constants';

const initialState = fromJS({});
let key = 0;

function BasketCardsRendererReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      key++;
      return state.set([key], { ...action.payload, key });
    case DELETE_ITEM:
      let newState = Object.assign({}, state.toJS());
      delete newState[action.payload];
      return fromJS(newState);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default BasketCardsRendererReducer;
