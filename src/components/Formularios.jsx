import React, {useState} from "react";

export default function Formularios(){
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("vanilla");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        alert("el formulario se ha enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                />

                 <p> Elije tu sabor JS favorito</p>
                 <label htmlFor="vanilla">vanilla</label>
                 <input type="radio"
                 id="vanilla" 
                 name="sabor"
                 value="vanilla"
                 onChange={(e)=> setSabor(e.target.value)}
                 defaultChecked
                />
                 <label htmlFor="react">react</label>
                 <input type="radio"
                 id="react" 
                 name="sabor"
                 value="react"
                 onChange={(e)=> setSabor(e.target.value)}
                 />
                 
                 <p>Elije tu lenguaje de programacion favorito</p>
                 <label htmlFor="lenguaje">selecciona uno</label>
                 <select 
                 name="lenguaje" 
                 id="lenguaje" 
                 onChange={(e)=> setLenguaje(e.target.value)}
                 defaultValue=""
                 >
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="ru">Rust</option>
                 </select>
                <br />

                 <label htmlFor="terminos">Acepto terminos y condiciones</label>
                 <input 
                 type="checkbox" 
                 name="terminos" 
                 id="terminos" 
                 onChange={(e)=> setTerminos(e.target.checked)}
                 />
                <br/>
                 <input type="submit" value="submit" />
            </form>
        </>
    )
}