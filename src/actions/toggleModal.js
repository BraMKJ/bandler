import actionTypes from './actionTypes'

export const showModal = name => {
  return {
    name,
    type: actionTypes.showModal
  }
}

export const hideModal = name => {
  return {
    name,
    type: actionTypes.hideModal
  }
}