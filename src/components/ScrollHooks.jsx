import React, {useState, useEffect} from "react";

export default function ScrollHooks(){
    const [scrollY, setscrollY] = useState(0);

    useEffect( () => {
        // console.log("Fase de actualizacion");

        const detectarScroll = () => {
            setscrollY(window.pageYOffset)
        }
        window.addEventListener("scroll", detectarScroll)

        return () => {
            window.removeEventListener("scroll", detectarScroll)
        }
    } );

    useEffect( () => {
        // console.log("Fase de montaje")
    }, []);
    return(
        <>
            <h2>Hook useEffect y el ciclo de vida</h2>
            <p>ScrollY del Navegador {scrollY}px</p>
        </>
    );
}