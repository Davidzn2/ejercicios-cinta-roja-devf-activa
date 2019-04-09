import React, { Component } from 'react';
import './App.css';
import Saludar from './Saludar'
import Ciclo from './Ciclo'

class App extends Component {
  handleChange = e =>{
    this.setState({
      equis: e.target.value.length,
    },()=>{
      console.log(this.state)
    })
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
        name="Equis Cosa"
      />
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
