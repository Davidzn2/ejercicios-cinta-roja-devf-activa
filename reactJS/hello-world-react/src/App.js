import React, { Component } from 'react';
import './App.css';
import Saludar from './Saludar'
import Ciclo from './Ciclo'

class App extends Component {
  state = {x:{}}
   handleChange = e =>{
    this.setState({
      x: e.target.value,
    },
      console.log(this.state)
    )
  }
  handleClick = () =>{
   alert('Clickeaste el boton')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hello World!!!
          </h1>
        </header>
        <input 
          onChange={this.handleChange} 
          type="text" 
          name="Cualquiera"
        />
        <button onClick={this.handleClick}>Hola</button>
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
