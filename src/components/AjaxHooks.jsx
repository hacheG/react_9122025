import React, {useState, useEffect} from "react";

function ShowPokemon({name, sprite}){
    return(
        <figure>
            <img src={sprite} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);

    // useEffect( () => {
    //     let pokeList = [];
    //     let url ="http://pokeapi.co/api/v2/pokemon/"
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(json => {
    //             // console.log(json.results)
    //             json.results.map( res => {
    //                 fetch(res.url)
    //                     .then( res => res.json())
    //                     .then( json => {
    //                         // console.log(json.sprites)
    //                         let pokeJoin = {
    //                             id: json.id,
    //                             name: json.name,
    //                             sprite: json.sprites.front_default,
    //                         }
    //                         // pokeList = [...pokeList, pokeJoin]
    //                         // setPokemons(pokeList)

    //                         setPokemons( (pokemons) => [...pokemons, pokeList])
    //                     })
    //             })
    //         })
    // },[]);

    useEffect( () => {
        const getPokemons = async(url) => {
            let res = await fetch(url);
            let json = await res.json();
            // console.log(json)

            json.results.forEach( async (res) => {
                    let el = await fetch(res.url)
                    let json = await el.json()

                    let pokeJoin = {
                            id: json.id,
                            name: json.name,
                            sprite: json.sprites.front_default,
                        }
                    setPokemons( (pokemons) => [...pokemons, pokeJoin])
                })
        };
        getPokemons("http://pokeapi.co/api/v2/pokemon/");

    },[]);
    return(
        <>
            <h2>Poke API con Hooks</h2>
            <div>{pokemons.map((poke, index) => <ShowPokemon key={index} name={poke.name} sprite={poke.sprite}/> )}</div>
        </>
    )
}