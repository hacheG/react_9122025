import React, {useState, useEffect} from "react";

export default function RelojHooks(){
    const [reloj, setReloj] = useState(new Date().toLocaleTimeString())
    const [visble, setVisble] = useState(false)
    
    useEffect( () => {
        let temporizador;

        if (visble){
            temporizador = setInterval(() => {
                setReloj(new Date().toLocaleTimeString())
            }, 1000);
        }
        return(()=>{
            clearInterval(temporizador)
        })
    },[visble] )

    return(
        <>
            <h2>Reloj con hooks</h2>
            <div>{visble && reloj}</div>
            <button onClick={()=>setVisble(true)}>iniciar</button>
            <button onClick={()=>setVisble(false)}>parar</button>
        </>
    )
}