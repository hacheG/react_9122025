import React, { Component } from "react";



export default class ComunicacionComponentes extends Component{
    state ={
        contador: 0,
    }

    incrementarContador = (e) => {
         this.setState({
            contador: this.state.contador + 1,
         })
    }
    render(){
        return(
            <>
            <h2>Comunicacion entre componentes</h2>
            <div>{this.state.contador}</div>
            <Hijo mensaje="Mensaje para el hijo1"/>
            <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo2"/>
            </>
        )
    }
}

function Hijo(props){
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>Boton hijo</button>
        </>
    )
}