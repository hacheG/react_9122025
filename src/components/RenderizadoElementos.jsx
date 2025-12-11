import React, {Component} from "react";
import data from "../helpers/data.json";

function ElementosLista(props){
    return(
        <div>
            {data.frameworks.map( frame => <li key={frame.id}><a href={frame.web} target="_blank"> {frame.name}</a></li>)}
        </div>
    )
}


export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props)
        this.state = {
            sessons: ["spring", "summer", "fall", "winter"],
        }
    }

    render(){
        return(
            <div>
                <h2>Renderizado Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.sessons.map( (el, index) => <li key={index}>{el}</li>)}
                </ol>
                <h3>Frameworks Frontend</h3>
                <ElementosLista/>
            </div>
        )
    }
}