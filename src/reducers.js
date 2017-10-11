import { combineReducers } from 'redux'
import { database } from './firebase'

const initialState = [
  {
    "artist": "",
    "name": "",
    "status": ""
  },
]

const songs = (state = initialState) => {
  return state
}

const songsApp = combineReducers({
  songs
})

export default songsApp