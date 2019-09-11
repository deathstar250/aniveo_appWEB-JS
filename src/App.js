import React, { Component } from 'react'; 
import './App.css';
import Padre from './componentes/escrito/Padre';
import Hijo from './componentes/escrito/Hijo';
import Nav from './componentes/views/nav';
import Player from './componentes/views/player';

class App extends Component {

  
    
  state = {
    contenido: []
  }

  componentDidMount () {
    this.getContenido();
  }

  getContenido = _ => {
    fetch('http://localhost:3002/GetLink')
    .then(Response => Response.json())
    .then(({ contenido }) => {
      console.log(contenido)
    })
    .catch(err => console.error(err))
  }

  

  renderContenido = ({ id,titulo,genero,sinapsis,calificacion_id,reparto,fecha_estreno,link,duracion_minutos,duracion_segundos }) => <div key={id}>{titulo}>{genero}>{sinapsis}>{calificacion_id}>{reparto}>{fecha_estreno}>{link}>{duracion_minutos}>{duracion_segundos}></div>;




  render() {

    let videoLink = '';
    const { contenido } = this.state;
    return (


      <div>
        <div>
          {contenido.map(this.renderContenido)}
        </div>
        <Nav></Nav>
        <Player video={videoLink}></Player>

      </div>
    );
  }
}

export default App;
/*  
  constructor(props){
    super(props);
    this.state = {
        title: 'busqda de link',
        link: []
    }
  }

  //Make ajax call here

  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
  }

  addVideo(){
    let letLink = {
      link: this.refs.link.value
    };
    var request = new request('http://localhost:3001/api/letLink', {
      method: 'POST',
      headers: new Headers({ 'Content-Type' : 'aplication/json' }),
      body: JSON.stringify(letLink)
    });
    console.log(letLink);
    //xmlhttprequest()
    fetch(request)
      .then(function(respose) {
        Response.JSON()
          .then(function(letLink){
            console.log(letLink);
          }) 
    });

  }
*/