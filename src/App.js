import React, { Component } from 'react'; 
import './App.css';
import Nav from './componentes/mainComponents/nav';
import Player from './componentes/mainComponents/player'; 
import { compileFunction } from 'vm';

class App extends Component {
  
  state = { 
    contenido: [],
    link: [],
    videos: []
  }

  async componentDidMount(){
    await this.getContenido();
    await this.getLink();
    await this.getVideos();
  } 

  getVideos = () => {
    fetch('http://localhost:3001/GetContenido-home')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({ videos: response.contenido })
    })
    .catch(err => console.error(err))
  }

  getContenido = () => {
    fetch('http://localhost:3001/GetName')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({ contenido: response.contenido })
    })
    .catch(err => console.error(err))
  }

  getLink = () => {
    fetch('http://localhost:3001/GetLink')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({ link: response.link })
    })
    .catch(err => console.error(err))
  }

  renderLink = (x) => {
    return x.link
  } 
  
  renderContenido = (x) => {
    return <div key= { x.nombre }>{ x.nombre }</div>
  } 

  
  render() {
    const { contenido } = this.state;
    const { videos } = this.state;
    const { link } = this.state;
    console.log("contenido", link);

    //let videoLink = "https://www.youtube.com/embed/Dukqpeagrp0";

    //console.log(renderContenido());

    
    return (
      <div>
        <div>
          
        </div>
        <Nav nombre={contenido.map(this.renderContenido)}></Nav>
        <Player video={link.map(this.renderLink)}></Player>

      </div>
    );
  }
}

export default App;
