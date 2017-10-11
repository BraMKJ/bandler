import actionTypes from './actionTypes'

export const turnOnEditMode = () => {
  return {
    type: actionTypes.editModeOn
  }
}

export const turnOffEditMode = () => {
  return {
    type: actionTypes.editModeOff
  }
}