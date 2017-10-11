import actionTypes from './actionTypes'
import { database } from '../firebase'

const getSingleRequestedAction = () => {
  return {
    type: actionTypes.getSingleRequested
  }
}

const getSingleRejectedAction = () => {
  return {
    type: actionTypes.getSingleRejected
  }
}

const getSingleFulFilledAction = song => {
  return {
    type: actionTypes.getSingleFulfilled,
    song
  }
}

export const getSingle = (songKey) => {
  return dispatch => {
    dispatch(getSingleRequestedAction())
    return database.ref('/song/' + songKey).once('value', snapshot => {
      const song = snapshot.val()
      dispatch (getSingleFulFilledAction(song))
    })
      .catch((error) => {
        console.log(error)
        dispatch(getSingleRejectedAction())
      })
  }
}

