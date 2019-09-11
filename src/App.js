import React, { Component } from 'react'; 
import './App.css';
import Padre from './componentes/escrito/Padre';
import Hijo from './componentes/escrito/Hijo';
import Nav from './componentes/views/nav';
import Player from './componentes/views/player';
import Carrousel from './componentes/views/carrousel';  
import { compileFunction } from 'vm';

class App extends Component {
  
  state = { 
    contenido: []
  }

  async componentDidMount(){
    await this.getContenido();
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


  
  renderContenido = (x) => {
  return <div key= { x.nombre }>{ x.nombre }</div>
} 

  
  render() {
    const { contenido } = this.state;
    console.log("contenido", contenido);
    let videoLink = "https://www.youtube.com/embed/Dukqpeagrp0";

    //console.log(renderContenido());


    return (
      <div>
        <div>
          
        </div>
        <Nav nombre={contenido.map(this.renderContenido)}></Nav>
        <Player video={videoLink}></Player>
       
      </div>
    );
  }
}

export default App;
