import { connect } from 'react-redux'
import {
  getSongs,
  removeSongRemovedEvent,
  removeSongAddedEvent,
  watchSongAddedEvent,
  watchSongRemovedEvent } from '../actions/getSongs'
import { removeSong } from '../actions/removeSong'
import { clearSongList } from '../actions/clearSongList'
import { clearAddSong } from '../actions/clearAddSong'
import { getSingle } from '../actions/getSingle'
import { showModal, hideModal } from '../actions/toggleModal'
import SongList from '../components/SongList/SongList'

const getVisibleSongs = (state, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return state
    case 'SHOW_ACTIVE':
      return {
        ...state,
        songs: state.songs.filter(song => song.status === 'active')
      }
    case 'SHOW_INACTIVE':
      return {
        ...state,
        songs: state.songs.filter(song => song.status === 'inactive')
      }
    case 'SHOW_IN_PROGRESS':
      return {
        ...state,
        songs: state.songs.filter(song => song.status === 'in progress')
      }
    case 'SHOW_NICE_TO_HAVE':
      return {
        ...state,
        songs: state.songs.filter(song => song.status === 'nice to have')
      }
    default:
      return state
  }
}

const mapStateToProps = state => {
  return {
    songs: getVisibleSongs(state.songs, state.visibilityFilter),
    visible: Boolean(state.modal.addSong)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWatchSongAddedEvent: () => dispatch(watchSongAddedEvent()),
    onRemoveSongAddedEvent: () => dispatch(removeSongAddedEvent()),
    onWatchSongRemovedEvent: () => dispatch(watchSongRemovedEvent()),
    onRemoveSongRemovedEvent: () => dispatch(removeSongRemovedEvent()),
    onGetSongs: () => dispatch(getSongs()),
    onShowAddSongModal: () => dispatch(showModal('addSong')),
    onHideAddSongModal: () => dispatch(hideModal('addSong')),
    onRemoveSong: (songKey) => dispatch(removeSong(songKey)),
    onClearSongList: () => dispatch(clearSongList()),
    onClearAddSong: () => dispatch(clearAddSong()),
    onGetSingle: (songKey) => dispatch(getSingle(songKey)),
  }
}

const SongsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList)

export default SongsContainer