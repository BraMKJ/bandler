const actionTypes = {
  getSongsRequested: 'GET_SONGS_REQUESTED',
  getSongsRejected: 'GET_SONGS_REJECTED',
  getSongsFulfilled: 'GET_SONGS_FULFILLED',

  clearSonglist: 'CLEAR_SONG_LIST',
  clearAddSong: 'CLEAR_ADD_SONG',

  addSongRequested: 'ADD_SONG_REQUESTED',
  addSongRejected: 'ADD_SONG_REJECTED',
  addSongFulfilled: 'ADD_SONG_FULFILLED',

  songAdded: 'SONG_ADDED',
  songRemoved: 'SONG_REMOVED',

  removeSongRequested: 'REMOVE_SONG_REQUESTED',
  removeSongRejected: 'REMOVE_SONG_REJECTED',
  removeSongFulfilled: 'REMOVE_SONG_FULFILLED',

  updateAddSongName: 'UPDATE_ADD_SONG_NAME',
  updateAddSongArtist: 'UPDATE_ADD_SONG_ARTIST',
  updateAddSongStatus: 'UPDATE_ADD_SONG_STATUS',

  getSingleRequested: 'GET_SINGLE_REQUESTED',
  getSingleRejected: 'GET_SINGLE_REJECTED',
  getSingleFulfilled: 'GET_SINGLE_FULFILLED',

  updateSingleNameInput: 'UPDATE_SINGLE_NAME_INPUT',
  updateSingleArtistInput: 'UPDATE_SINGLE_ARTIST_INPUT',
  updateSingleStatusInput: 'UPDATE_SINGLE_STATUS_INPUT',
  updateSingleDurationInput: 'UPDATE_SINGLE_DURATION_INPUT',
  updateSingleNotesInput: 'UPDATE_SINGLE_NOTES_INPUT',

  updateSongRequested: 'UPDATE_SONG_REQUESTED',
  updateSongRejected: 'UPDATE_SONG_REJECTED',
  updateSongFulFilled: 'UPDATE_SONG_FULFILLED',

  songUpdated: 'SONG_UPDATED',

  getStatuses: 'GET_STATUSES',

  setVisibilityFilter: 'SET_VISIBILITY_FILTER',

  showModal: 'SHOW_MODAL',
  hideModal: 'HIDE_MODAL',

  editModeOn: 'EDIT_MODE_ON',
  editModeOff: 'EDIT_MODE_OFF'
}

export default actionTypes