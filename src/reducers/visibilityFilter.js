import actionTypes from '../actions/actionTypes'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actionTypes.setVisibilityFilter:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter