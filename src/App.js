import React, { Component } from 'react'; 
import './App.css';
import Padre from './componentes/escrito/Padre';
import Hijo from './componentes/escrito/Hijo';
import Nav from './componentes/views/nav';
import Player from './componentes/views/player';

class App extends Component {
  render() {

    let videoLink = "https://www.youtube.com/embed/Dukqpeagrp0";

    return (
      <div>
        <Nav></Nav>
        <Player video={videoLink}></Player>

      </div>
    );
  }
}

export default App;
