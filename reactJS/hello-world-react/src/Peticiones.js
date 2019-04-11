import React, { Component } from 'react';

import Axios from 'axios';

class Peticiones extends Component {
  state={
    users:[]
  }
  componentDidMount(){
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res=>{
        this.setState({users:res.data})
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleChange = event =>{
      this.setState({name: event.target.value})
  }
  handleSubmit = event=>{
      event.preventDefault();
      const user ={
          name:this.state.name
      }
      Axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
      .then(res=>{
        console.log(res)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
      
      <h1>Get</h1>
        <ul>
        {this.state.users.map(user=> 
            <li key={user.id}> {user.name} </li>
        )}
         </ul>
        <h1>Post</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
            <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }
}

export default Peticiones;
