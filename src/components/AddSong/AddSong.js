import React, { Component } from 'react'
import ModalPanel from '../../elements/Modal/ModalPanel'

export default class AddSong extends Component {

  componentDidMount() {
    this.props.onGetStatuses()
  }

  handleNameChange(event) {
    this.props.onUpdateSongNameInput(event.target.value)
  }

  handleArtistChange(event) {
    this.props.onUpdateSongArtistInput(event.target.value)
  }

  handleStatusChange(event) {
    this.props.onUpdateSongStatusInput(event.target.value)
  }

  render() {
    const statuses = this.props.newSong.statuses
    return (
      <ModalPanel>
        <div className="modal__header">
          <h2 className="modal__title">Add song</h2>
        </div>
        <div className="modal__content">
          <form>
            <fieldset>
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="song-name">Name:</label>
                  <input
                    id="song-name"
                    type="text"
                    value={this.props.newSong.name}
                    onChange={event => this.handleNameChange(event)}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="song-artist">Artist:</label>
                  <input
                    id="song-artist"
                    type="text"
                    value={this.props.newSong.artist}
                    onChange={event => this.handleArtistChange(event)}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="song-status">Status:</label>
                  <select id="song-status" onChange={event => this.handleStatusChange(event)}>
                    { statuses &&
                      statuses.map((status, index) => {
                          return <option value={status} key={index}>{status}</option>
                        }
                      )}
                    }
                  </select>
                </div>
              </div>
            </fieldset>
            <div className="button-group">
              <button type="button" onClick={() => this.props.onHideAddSongModal()}>Cancel</button>
              <button type="button" onClick={() => this.props.onAddSong(
                this.props.newSong.name,
                this.props.newSong.artist,
                this.props.newSong.selectedStatus
              )}>
                Add
              </button>
            </div>
          </form>
        </div>
      </ModalPanel>
    )
  }
}