import React, { Component } from 'react'; 
import './App.css';
import Padre from './componentes/escrito/Padre';
import Hijo from './componentes/escrito/Hijo';
import Nav from './componentes/views/nav';
import Player from './componentes/views/player';

class App extends Component {

  
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

  render() {

    let videoLink = this.state.link;

    return (


      <div>
        <Nav></Nav>
        <Player video={videoLink}></Player>

      </div>
    );
  }
}

export default App;
