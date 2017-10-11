import actionTypes from '../actions/actionTypes'

const initialState = {
  editMode: false
}

export const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getSingleRequested:
      return {
        ...state,
        inProgress: true,
        error: '',
        success: ''
      }
    case actionTypes.getSingleRejected:
      return {
        ...state,
        inProgress: false,
        error: 'Error in retrieving song.'
      }
    case actionTypes.getSingleFulfilled: {
      const song = action.song
      return {
        ...state,
        id: song.id,
        name: song.name,
        artist: song.artist,
        status: song.status,
        duration: song.duration,
        notes: song.notes
      }
    }
    case actionTypes.editModeOn:
      return {
        ...state,
        editMode: true
      }
    case actionTypes.editModeOff:
      return {
        ...state,
        editMode: false
      }
    case actionTypes.updateSongRequested: {
        return {
          ...state,
          inProgress: true,
          error: '',
          success: ''
        }
    }
    case actionTypes.updateSongRejected: {
      return {
        ...state,
        inProgress: false,
        error: 'Error in updating song.',
      }
    }
    case actionTypes.updateSongFulFilled: {
      return {
        ...state,
        inProgress: false,
        success: 'Updated song.',
      }
    }
    case actionTypes.updateSingleNameInput:
      return {
        ...state,
        name: action.newSongName
      }
    case actionTypes.updateSingleArtistInput:
      return {
        ...state,
        artist: action.newSongArtist
      }
    case actionTypes.updateSingleStatusInput:
      return {
        ...state,
        status: action.newSongStatus
      }
    case actionTypes.updateSingleDurationInput:
      return {
        ...state,
        duration: action.newSongDuration
      }
    case actionTypes.updateSingleNotesInput:
      return {
        ...state,
        notes: action.newSongNotes
      }
    default:
      return state
  }
}