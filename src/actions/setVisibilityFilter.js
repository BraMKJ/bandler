import actionTypes from './actionTypes'

export const setVisibilityFilter = filter => {
  return {
    type: actionTypes.setVisibilityFilter,
    filter
  }
}