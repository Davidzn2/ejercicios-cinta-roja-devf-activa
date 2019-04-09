import React from 'react';

class Saludar extends React.Component{
    render(){
        return(
            <h3>Hola { this.props.nombre } { this.props.apellido }</h3>
        )
    }
    
}

export default Saludar;