import React, {Component} from "react";

export default class Eventos extends Component {
    /* ES7
    state = {
        propertiesInitialzer: 0
    } */
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }
        this.sumar = this.sumar.bind(this);

    }

    sumar(){
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    multi(){
        this.setState({
            contador: this.state.contador * 2
        })
    }

   /*  ES7
   sum = () => {
        this.setState({
        propertiesInitialzer: this.state.propertiesInitialzer + 10
        })
    } */
    render(){
        return(
            <div>
                <h2>Eventos</h2>
                <h3>{this.state.contador}</h3>
                {/* ES7
                <h5>{this.state.propertiesInitialzer}</h5> */}
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                    <button onClick={this.multi.bind(this)}> * </button> 
                    {/* ES7
                    <button onClick={this.sum}> + </button>
                    
                    */}
                </nav>
            </div>
        )
    }
}