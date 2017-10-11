import { connect } from 'react-redux'
import {
  addSong,
  updateSongArtistInput,
  updateSongNameInput,
  updateSongStatusInput } from '../actions/addSong'
import { getStatuses} from '../actions/getStatuses'
import { hideModal } from '../actions/toggleModal'
import AddSong from '../components/AddSong/AddSong'

const mapStateToProps = (state) => {
  return {
    newSong: state.addSong
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSong: (name, artist, status) => {
      dispatch(addSong(name, artist, status))
      dispatch(hideModal('addSong'))
      dispatch(updateSongStatusInput('active'))
    },
    onUpdateSongNameInput: (newValue) => dispatch(updateSongNameInput(newValue)),
    onUpdateSongArtistInput: (newValue) => dispatch(updateSongArtistInput(newValue)),
    onUpdateSongStatusInput: (newValue) => dispatch(updateSongStatusInput(newValue)),
    onGetStatuses: () => dispatch(getStatuses()),
    onHideAddSongModal: () => dispatch(hideModal('addSong'))
  }
}

const AddSongContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSong)

export default AddSongContainer