import React from "react";
import Componente from "./Componente";

export default function Propiedades({
    numero = 4,
    cadena = "default",
    bool = false,
    arreglo = [0,0,0],
    objeto = {nombre: "guest", direccion: "ninguna"},
    elementoReact = <b>elemento react por default</b>,
    funcion = num => num+num,
    componenteReact = <Componente msj= "por default"/>
}){
    return (
        <div>
            <li>{numero} </li>
            <li>{cadena} </li>
            <li>{bool ? "es TRUE" : "es FALSE"} </li>
            <li>{arreglo.join(", ")}</li>
            <li>{objeto.nombre + " " + objeto.direccion} </li>
            <li>{arreglo.map(funcion).join(", ") } </li>
            <li>{elementoReact} </li>
            <li>{componenteReact} </li>

        </div>
    );
}

// Forma anterior
Propiedades.defaultProps = {
    numero: "default"
}