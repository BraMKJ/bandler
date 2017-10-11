import actionTypes from './actionTypes'
import { database } from '../firebase'

const removeSongRequestedAction = () => {
  return {
    type: actionTypes.removeSongRequested
  }
}

const removeSongRejectedAction = () => {
  return {
    type: actionTypes.removeSongRejected
  }
}

const removeSongFulFilledAction = songKey => {
  return {
    type: actionTypes.removeSongFulfilled,
    songKey
  }
}

export const removeSong = (songKey) => {
  return dispatch => {
    dispatch(removeSongRequestedAction())
    const songsRef = database.ref('/songs')
    const singleRef = database.ref('/song/' + songKey)
    songsRef.child(songKey).remove()
      .then(() => {
        singleRef.remove()
        dispatch(removeSongFulFilledAction(songKey))
      })
      .catch((error) => {
        dispatch(removeSongRejectedAction())
        console.log(error)
      })
  }
}