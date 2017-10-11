import actionTypes from '../actions/actionTypes'

const initialState = {
  name: '',
  artist: '',
  statuses: [
    'active',
    'inactive',
    'in progress',
    'nice to have'
  ],
  selectedStatus: 'active'
}

export function addSongReducer(state =  initialState, action) {
  switch(action.type) {
    case actionTypes.getStatuses:
      return state
    case actionTypes.updateAddSongName:
    return {
      ...state,
      name: action.newSongName
    }
    case actionTypes.updateAddSongArtist:
      return {
        ...state,
        artist: action.newSongArtist
      }
    case actionTypes.updateAddSongStatus:
      return {
        ...state,
        selectedStatus: action.newSongStatus
      }
    case actionTypes.clearAddSong:
      return {
        ...state,
        name: '',
        artist: '',
        statuses: [
          'active',
          'inactive',
          'in progress',
          'nice to have'
        ],
        selectedStatus: 'active'
      }
    default:
      return state
  }
}