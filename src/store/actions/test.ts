// action 

import {
  ADD,
  MINUS
} from '../constans/test'


interface IAction {
  type: string,
  payload: string
}

export const add = (): IAction => {
  return {
    type: ADD,
    payload: 'add num'
  }
}

export const minus = (): IAction => {
  return {
    type: MINUS,
    payload: 'minus num'
  }
}

export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch( add() )
    }, 2000)
  }
}


type AddAction = ReturnType<typeof add>
type ToggleAction = ReturnType<typeof minus>
export type Action = AddAction | ToggleAction
