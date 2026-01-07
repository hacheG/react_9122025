import React from "react";
import "./Estilos.css"
import moduleStyles from"./Estilos.module.css"
import "./Estilos.scss"

export default function Estilos(){
    let myStyles = {
        borderRadius: ".5rem",
        margin: "2rem auto",
        maxWidth: "50%"
    }
    return(
        <section className="estilos">
            <h2>Estilos</h2>
            <h3 className="bg-react">Estilos con hoja css externa</h3>
            <h3
                className="bg-react" 
                style={{
                    borderRadius: "0.25rem",
                    margin: "1rem"
                }}>
                Estilos en linea (atributo stile)
            </h3>
            <h3
                className="bg-react" 
                style={myStyles}>
                Estilos en linea con Variable
            </h3>
            <h3 
                className="bg-react">
                Agregando Normalize (solo en create rect app)
                <br />
                <code>@import-normalize</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.succes}>Estilos con modulos</h3>
            
            <h3 className="bg-sass">Estilos con SASS</h3>

        </section>
    )
}