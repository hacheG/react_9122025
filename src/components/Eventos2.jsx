import React, {Component} from "react";

export default class Eventos2 extends Component {
    handleClick = (e, mesj) => {
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        
        console.log(mesj);
        
    }
    
    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
            <button onClick={(e)=>this.handleClick(e, "Pasando parametro desde Evento")}>Saludar</button>
            <Boton myOnClik={(e)=>this.handleClick(e, "evento personalizado")}/>
            </div>
        )
    }
}

const Boton = ({myOnClik}) => <button onClick={myOnClik}> Boton hecho componente</button>
