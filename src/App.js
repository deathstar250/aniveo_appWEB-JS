import React, { Component } from 'react'; 
import './App.css';
import Padre from './componentes/escrito/Padre';
import Hijo from './componentes/escrito/Hijo';
import Nav from './componentes/mainComponents/nav';
import Player from './componentes/mainComponents/player'; 
import { compileFunction } from 'vm';

class App extends Component {
  
  state = { 
    contenido: [],
    link: []
  }

  async componentDidMount(){
    await this.getContenido();
    await this.getLink();
  } 

  getContenido = () => {
    fetch('http://localhost:3003/GetName')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({ contenido: response.contenido })
    })
    .catch(err => console.error(err))
  }

  getLink = () => {
    fetch('http://localhost:3003/GetLink')
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
