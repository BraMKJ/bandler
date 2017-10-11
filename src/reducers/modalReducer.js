import actionTypes from '../actions/actionTypes'

const initialState = {}

export function modalReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.showModal:
      return {
        ...state,
        [action.name]: true
      }
    case actionTypes.hideModal:
      return {
        ...state,
        [action.name]: false
      }
    default:
      return state
  }
}