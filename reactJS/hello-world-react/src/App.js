import React, { Component } from 'react';
import './App.css';
import Saludar from './Saludar'
import Ciclo from './Ciclo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hello World!!!
          </h1>
        </header>
        <Saludar 
          nombre="David"
          apellido="Zonana"
        />
        <Saludar 
          nombre="Moishe" 
        />
        <Saludar 
          nombre="Jaco" 
        />
        <Ciclo />
      </div>
      
    );
  }
}

export default App;
