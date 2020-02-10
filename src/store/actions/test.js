// action 

import {
  ADD,
  MINUS
} from '../constans/test.js'

export const add = () => {
  return {
    type: ADD,
    payload: 'add num'
  }
}

export const minus = () => {
  return {
    type: MINUS,
    payload: 'minus num'
  }
}

export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}