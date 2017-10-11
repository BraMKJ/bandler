import actionTypes from '../actions/actionTypes'

export const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.getSongsRequested:
      return {
        ...state,
        inProgress: true,
        error: '',
        success: ''
      }
    case actionTypes.getSongsRejected:
      return {
        ...state,
        inProgress: false,
        error: 'Error in retrieving songs.'
      }
    case actionTypes.getSongsFulfilled: {
      const { songs } = action.songs
      const newState = {
        ...state,
        inProgress: false,
        success: 'Got songs.',
        songs
      }
      newState.songs = []
      if (songs) {
        newState.songs = Object.keys(songs).map(k => songs[k])
      }
      return newState
    }
    case actionTypes.removeSongRequested:
      return {
        ...state,
        inProgress: true,
        error: '',
        success: ''
      }
    case actionTypes.removeSongRejected:
      return {
        ...state,
        inProgress: false,
        error: 'Error in removing song.'
      }
    case actionTypes.removeSongFulfilled:
      return {
        ...state,
        inProgress: false,
        error: '',
        songs: state.songs.filter(song => action.songKey !== song.id)
      }
    case actionTypes.addSongRequested:
      return {
        ...state,
        inProgress: true,
        error: '',
        success: ''
      }
    case actionTypes.addSongRejected:
      return {
        ...state,
        inProgress: false,
        error: 'Error in adding song.'
      }
    case actionTypes.addSongFulfilled:
      return {
        ...state,
        inProgress: false,
        success: 'Added song.',
      }
    case actionTypes.songAdded: {
      const newState = {
        ...state
      }
      newState.songs = newState.songs || []
      newState.songs = newState.songs.slice()
      newState.songs.push(action.song)
      return newState
    }
    case actionTypes.songRemoved:
      return {
        ...state,
        songs: state.songs.filter(song => action.songKey.id !== song.id)
      }
    case actionTypes.clearSonglist:
      return {
        ...state,
        songs: []
      }
    default:
      return state
  }
}