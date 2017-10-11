import actionTypes from './actionTypes'

const getStatusesAction = () => {
  return {
    type: actionTypes.getStatuses
  }
}

export function getStatuses() {
  return dispatch => {
    dispatch(getStatusesAction())
  }
}