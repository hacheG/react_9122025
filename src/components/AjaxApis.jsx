import React, { Component } from "react"

function Pokemon(props){
    // {console.log(props.avatar)}
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApis extends Component {
    constructor(props){
        super(props)
        this.alterPoke = []
        this.state = {
            pokemons: [],
        };
    };

    componentDidMount(){
        let url = "http://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                json.results.forEach( el => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then( json => {
                            console.log(json)
                            // console.log(json.sprites.front_default)
                            // console.log("nombre",el.name)
                            let pokeJoin = {
                                id: json.id,
                                nombre: el.name,
                                sprite: json.sprites.front_default
                            }
                            
                            this.alterPoke = [...this.alterPoke, pokeJoin]
                            
                            this.setState({
                                pokemons: this.alterPoke
                            })
                        })
                })
            })
    }

    render(){
        return(
            <>
                <h2>peticiones asincronas en componentes de clase - Ajax Apis</h2>
                {this.state.pokemons.map( poke => <Pokemon key={poke.id} name={poke.nombre} avatar={poke.sprite}/>)}
                
            </>
        )
    }
}