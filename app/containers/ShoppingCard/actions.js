/*
 *
 * Card actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_ITEM
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addItem(item){
  return {
    payload: item,
    type: ADD_ITEM,
  };
}
