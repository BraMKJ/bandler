import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../elements/Modal/Modal'
import Wrapper from '../../elements/Wrapper/Wrapper'
import AddSongContainer from '../../containers/addSongContainer'
import Filter from '../Filter/Filter'
import './SongList.scss'

export default class SongList extends Component {

  componentDidMount() {
    this.props.onGetSongs()
    this.props.onWatchSongAddedEvent()
    this.props.onWatchSongRemovedEvent()
  }

  componentWillUnmount() {
    this.props.onClearSongList()
    this.props.onClearAddSong()
    this.props.onRemoveSongAddedEvent()
    this.props.onRemoveSongRemovedEvent()
  }

  handleRemoveSong(songKey) {
    this.props.onRemoveSong(songKey)
  }

  handleSongClick(songKey) {
    this.props.onGetSingle(songKey)
  }

  render() {
    const { songs } = this.props.songs
    return (
      <Wrapper>
        <div className="song-list">
          <div className="song-list__title">
            <h3>Songs</h3>
            <button type="button" onClick={this.props.onShowAddSongModal} className="button button__add">
              <div className="button__wrapper">+</div>
            </button>
            {this.props.visible ? (
              <Modal name="addSong">
                <AddSongContainer/>
              </Modal>
            ) : null}
          </div>
          <Filter/>
          {songs && (
            songs.map((song, index) =>
              <div className="song-list__song" key={song.id}>
                <div className="song-list-song__info">
                  <Link to={`/song/${song.id}`}  className="link link__song" onClick={() => this.handleSongClick(song.id)}>
                    <div className="song-list-song__name-artist">
                      <span className="song-list-song__name">{song.name}</span>
                      <span className="song-list-song__artist">{song.artist}</span>
                    </div>
                    <span className="song-list-song__status">{song.status}</span>
                  </Link>
                </div>
                <button type="button" className="button" onClick={() => this.handleRemoveSong(song.id)}>X</button>
              </div>
            )
          )}
        </div>
      </Wrapper>
    )
  }
}