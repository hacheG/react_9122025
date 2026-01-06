import React, {useState, useEffect} from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados(){
    // console.log(useFetch());
    let url2 = "https://pokeapi.co/api/v2/pokemons/";
    let url = "https://jsonplaceholder.typicode.com/users";
    const {data,isPending, error} = useFetch(url)
    // console.log(data)
    // console.log(error)
    return(
        <>
            <h2>Hooks Personnalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>{JSON.stringify(error)}</h3>
            <h3>
                <pre style={{
                    whiteSpace: "pre-wrap"
                }}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </>
    )
}