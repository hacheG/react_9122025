import React, {Component} from "react";

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
    }
    
    render(){
        return (
            <div>
                <h2>El State</h2>
                <div>{this.state.contador}</div>
                <EstadoAHijo state={this.state.contador}/>
            </div>)
    }
}

function EstadoAHijo({state}){
    return(
        <div>
            <p>pasando un estado</p>
            {state}
        </div>
    )
}