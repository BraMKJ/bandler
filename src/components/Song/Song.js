import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../elements/Wrapper/Wrapper'
import './Song.scss'

export default class Song extends Component {

  handleEditModeOn() {
    this.props.onTurnOnEditMode()
  }

  handleEditModeOff() {
    this.props.onTurnOffEditMode()
  }

  handleNameChange(event) {
    this.props.onUpdateSingleName(event.target.value)
  }

  handleArtistChange(event) {
    this.props.onUpdateSingleArtist(event.target.value)
  }

  handleStatusChange(event) {
    this.props.onUpdateSingleStatus(event.target.value)
  }

  handleDurationChange(event) {
    this.props.onUpdateSingleDuration(event.target.value)
  }

  handleNotesChange(event) {
    this.props.onUpdateSingleNotes(event.target.value)
  }

  render() {
    const song = this.props.song
    const statuses = this.props.statuses
    return (
      <Wrapper>
        <div className="song">
          <div className="tile tile__title">
            {
              !song.editMode ?
                <div className="static-content">
                  {song.name}
                  <button
                    className="button button__edit-song"
                    onClick={() => this.handleEditModeOn()}
                  >
                    <div className="button__wrapper">Edit</div>
                  </button>
                </div> :
                <div className="edit-mode">
                  <input type="text" value={song.name} onChange={event => this.handleNameChange(event)}/>
                </div>
            }
            <Link to="/songs">Back to songs</Link>
          </div>
          <div className="tile">
            {
              !song.editMode ?
                song.artist :
                <div className="edit-mode">
                  <input type="text" value={song.artist} onChange={event => this.handleArtistChange(event)}/>
                </div>
            }
          </div>
          <div className="tile">
            {
              !song.editMode ?
                song.status :
                <div className="edit-mode">
                  <select type="text" value={song.status} onChange={event => this.handleStatusChange(event)}>
                    { statuses &&
                      statuses.map((status, index) => {
                          return <option value={status} key={index}>{status}</option>
                        }
                      )
                    }
                  </select>
                </div>
            }
          </div>
          <div className="tile">
            {
              !song.editMode ?
                song.duration :
                <div className="edit-mode">
                  <input type="text" value={song.duration} onChange={event => this.handleDurationChange(event)}/>
                </div>
            }
          </div>
          <div className="tile">
            {
              !song.editMode ?
                <div dangerouslySetInnerHTML={{ __html: song.notes }}></div> :
                <div className="edit-mode">
                  <textarea
                    name="song-notes"
                    cols="30"
                    rows="10"
                    value={song.notes}
                    onChange={event => this.handleNotesChange(event)}>
                  </textarea>
                </div>
            }
          </div>
          {
            song.editMode &&
            <div className="tile">
              <button
                className="button button__save"
                onClick={() => this.props.onUpdateSong(
                  this.props.song.id,
                  this.props.song.name,
                  this.props.song.artist,
                  this.props.song.status,
                  this.props.song.duration,
                  this.props.song.notes
                )}>
                <div className="button__wrapper">Save changes</div>
              </button>
              <button className="button button__cancel">
                <div
                  className="button__wrapper"
                  onClick={() => this.handleEditModeOff()}>Cancel
                </div>
              </button>
            </div>
          }
        </div>
      </Wrapper>
    )
  }
}
