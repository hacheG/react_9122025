import React, {Component} from "react";

// class Componente extends Component {
//     render(){
//         return <h2>{this.props.msj} de clase</h2>
//     }
// }

// function Componente(props){
//     return(
//         <h2>{props.msj} funcional</h2>
//     )
// }

const Componente = props => <h2> {props.msj} arrow </h2>

export default Componente