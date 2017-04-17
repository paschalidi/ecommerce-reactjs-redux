/*
 *
 * BasketCard actions
 *
 */

import {
  DEFAULT_ACTION,
  DELETE_ITEM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function deleteItem(key) {
  return {
    payload: key,
    type: DELETE_ITEM,
  };
}
