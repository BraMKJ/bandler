import { combineReducers } from 'redux'
import { songsReducer } from './songsReducer'
import visibilityFilter from './visibilityFilter'
import { addSongReducer } from './addSongReducer'
import { singleReducer } from './singleReducer'
import { modalReducer } from './modalReducer'

const rootReducer = combineReducers({
  songs: songsReducer,
  visibilityFilter,
  addSong: addSongReducer,
  song: singleReducer,
  modal: modalReducer
})

export default rootReducer