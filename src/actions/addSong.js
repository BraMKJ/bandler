import actionTypes from './actionTypes'
import { database } from '../firebase'

const addSongRequestedAction = () => {
  return {
    type: actionTypes.addSongRequested
  }
}

const addSongRejectedAction = () => {
  return {
    type: actionTypes.addSongRejected
  }
}

const addSongFulfilledAction = song => {
  return {
    type: actionTypes.addSongFulfilled,
    song
  }
}

export function addSong(name, artist, status) {
  return dispatch => {
    dispatch(addSongRequestedAction())
    const songsRef = database.ref('/songs').push()
    const newKey = songsRef.key
    const songRef = database.ref('/song/' + newKey)

    const newSong = {
      id: newKey,
      name: name,
      artist: artist,
      status: status,
    }

    const newSingle = {
      ...newSong,
      notes: '',
      duration: ''
    }

    songsRef.set(newSong)
      .then(() => {
        songRef.set(newSingle)
        dispatch(addSongFulfilledAction(newSong))
      })
      .catch((error) => {
        dispatch(addSongRejectedAction())
        console.log(error)
      })
  }
}

export const updateSongNameInput = newSongName => {
  return {
    type: actionTypes.updateAddSongName,
    newSongName
  }
}

export const updateSongArtistInput = newSongArtist => {
  return {
    type: actionTypes.updateAddSongArtist,
    newSongArtist
  }
}

export const updateSongStatusInput = newSongStatus => {
  return {
    type: actionTypes.updateAddSongStatus,
    newSongStatus
  }
}