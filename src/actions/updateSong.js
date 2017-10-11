import actionTypes from './actionTypes'
import { database } from '../firebase'

const updateSongRequestedAction = () => {
  return {
    type: actionTypes.addSongRequested
  }
}

const updateSongRejectedAction = () => {
  return {
    type: actionTypes.addSongRejected
  }
}

const updateSongFulfilledAction = song => {
  return {
    type: actionTypes.addSongFulfilled,
    song
  }
}

export function updateSong(songKey, name, artist, status, duration, notes) {
  return dispatch => {
    dispatch(updateSongRequestedAction())
    const songsRef = database.ref('/songs/' + songKey)
    const songRef = database.ref('/song/' + songKey)

    const newSong = {
      id: songKey,
      name: name,
      artist: artist,
      status: status,
    }

    const newSingle = {
      ...newSong,
      notes: notes,
      duration: duration
    }

    songsRef.set(newSong)
      .then(() => {
        songRef.set(newSingle)
        dispatch(updateSongFulfilledAction(newSong))
      })
      .catch((error) => {
        dispatch(updateSongRejectedAction())
        console.log(error)
      })
  }
}

export const updateSingleNameInput = newSongName => {
  return {
    type: actionTypes.updateSingleNameInput,
    newSongName
  }
}

export const updateSingleArtistInput = newSongArtist => {
  return {
    type: actionTypes.updateSingleArtistInput,
    newSongArtist
  }
}

export const updateSingleStatusInput = newSongStatus => {
  return {
    type: actionTypes.updateSingleStatusInput,
    newSongStatus
  }
}

export const updateSingleDurationInput = newSongDuration => {
  return {
    type: actionTypes.updateSingleDurationInput,
    newSongDuration
  }
}

export const updateSingleNotesInput = newSongNotes => {
  return {
    type: actionTypes.updateSingleNotesInput,
    newSongNotes
  }
}
