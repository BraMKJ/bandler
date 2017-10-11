import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SongsContainer from './containers/songsContainer'
import SingleContainer from './containers/singleContainer'
import './assets/scss/app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main" role="main">
          <Route exact path="/" component={SongsContainer} />
          <Route path="/songs" component={SongsContainer} />
          <Route exact path="/song" component={SongsContainer} />
          <Route path="/song/:id" component={SingleContainer} />
        </div>
        <div id="modal-root"></div>
      </div>
    )
  }
}

export default App
