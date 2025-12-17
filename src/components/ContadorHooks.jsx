import React, { useState } from "react";

export default function ContadorHooks(){
    const [contador, setContador] = useState(0);
    
    function sumar() {
        setContador( contador + 1)
    }

    const restar = () => {
        setContador( contador - 1)
    }

    return(
        <>
            <h2>Contador con Hooks</h2>
            <div>{contador}</div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </>
    )
}