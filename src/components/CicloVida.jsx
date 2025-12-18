import React, {Component} from "react";

export default class CicloVida extends Component {
    constructor(props){
        super(props)
        // console.log(0, "el componente se inicializa, aun NO esta en el DOM");
        
        this.temporizador = null;
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        }
    }

    componentDidMount() {
        // console.log(1, "el componente ya se encuentra en el DOM");
        
    }

    componentDidUpdate(prevprops, prevState){
        // console.log(2, "El estado o las props han cambiado");
        // console.log("prevprops",prevprops);
        // console.log("prevState", prevState);
        
    }

    

    inciar = () => {
        this.setState({
            visible: true,
        })

        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    detener = () => {
        this.setState({
            visible: false,
        })
        clearInterval(this.temporizador)
    }

    render(){
        // console.log(4, "el componente se dubuja o redibuja por algun cambio en el DOM");
        
        return(
            <>
                <h2>Ciclo de vida</h2>
                <h3>{this.state.hora}</h3>
                <button onClick={this.inciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
            </>
        )
    }
}

class Reloj extends Component {
    constructor(props){
        super(props)
    }

    componentWillUnmount() {
        console.log(3, "el componente ha sido eliminado del DOM");
        
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}