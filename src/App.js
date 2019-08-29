import React, { Component } from 'react'; 
import './App.css';
import Padre from './componentes/escrito/Padre';
import Hijo from './componentes/escrito/Hijo';
import Nav from './componentes/views/nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
