import React, { Component } from 'react'; 
import Nav from '../mainComponents/nav';
import Player from '../mainComponents/player';
import { compileFunction } from 'vm';
import Frame_Home from '../mainComponents/frame-home'

class App extends Component {
  
  state = { 
    contenido: [],
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
    //let videoLink = "https://www.youtube.com/embed/Dukqpeagrp0";

    //console.log(renderContenido());

    
    return (
      <div>
        <div>
          
        </div>
        <Nav nombre={contenido.map(this.renderContenido)}></Nav>
        <Frame_Home></Frame_Home>
      </div>
    );
  }
}

export default App;
