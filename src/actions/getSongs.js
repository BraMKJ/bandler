import actionTypes from './actionTypes'
import { database } from '../firebase'

const getSongsRequestedAction = () => {
  return {
    type: actionTypes.getSongsRequested
  }
}

const getSongsRejectedAction = () => {
  return {
    type: actionTypes.getSongsRejected
  }
}

const getSongsFulFilledAction = songs => {
  return {
    type: actionTypes.getSongsFulfilled,
    songs
  }
}

export const getSongs = () => {
  return dispatch => {
    dispatch (getSongsRequestedAction())
    return database.ref('/').once('value', snapshot => {
      const songs = snapshot.val()
      dispatch (getSongsFulFilledAction(songs))
    })
      .catch((error) => {
        console.log(error)
        dispatch(getSongsRejectedAction())
      })
  }
}

const getSongAddedAction = song => {
  return {
    type: actionTypes.songAdded,
    song
  }
}

export const watchSongAddedEvent = () => {
  return dispatch => {
    database.ref('/songs').on('child_added', (snapshot) => {
      dispatch(getSongAddedAction(snapshot.val()))
    })
  }
}

export const removeSongAddedEvent = () => {
  return () => {
    database.ref('/songs').off('child_added')
  }
}

const getSongRemovedAction = songKey => {
  return {
    type: actionTypes.songRemoved,
    songKey
  }
}

export const watchSongRemovedEvent = () => {
  return dispatch => {
    database.ref('/songs').on('child_removed', (snapshot) => {
      dispatch(getSongRemovedAction(snapshot.val()))
    })
  }
}

export const removeSongRemovedEvent = () => {
  return () => {
    database.ref('/songs').off('child_removed')
  }
}