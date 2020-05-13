// reduces 测试加减

import { ADD, MINUS } from '../constans/test'
import { Action } from '../actions/test'


interface State {
  num: number
}

const INITIAL_STATE: State = {
  num: 0
}

export default function counter ( state: State = INITIAL_STATE, action: Action ) {
  switch ( action.type ) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}