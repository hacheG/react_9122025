import React, {useState} from "react";

export default function FormularioAvanzado(){
    const [form, setFrom] = useState({});

    const handleChange = e => {
        setFrom({
            ...form,
            [e.target.name]: e.target.value
        })
    };
    const handleChecked = e => {
        setFrom({
            ...form,
            [e.target.name]: e.target.checked
        })
    };
    const handleSubmit = e => {
        // e.preventDefault()
        alert("el formulario se ha enviado")
    };

    return(
        <>
            <h2>Formulario Avanzado</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={form.name}
                onChange={handleChange}
                />

                 <p> Elije tu sabor JS favorito</p>
                 <label htmlFor="vanilla">vanilla</label>
                 <input type="radio"
                 id="vanilla" 
                 name="sabor"
                 value="vanilla"
                 onChange={handleChange}
                 defaultChecked
                />
                 <label htmlFor="react">react</label>
                 <input type="radio"
                 id="react" 
                 name="sabor"
                 value="react"
                 onChange={handleChange}
                 />
                 
                 <p>Elije tu lenguaje de programacion favorito</p>
                 <label htmlFor="lenguaje">selecciona uno</label>
                 <select 
                 name="lenguaje" 
                 id="lenguaje" 
                 onChange={handleChange}
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
                 onChange={handleChecked}
                 />
                <br/>
                 <input type="submit" value="submit" />
            </form>
        </>
    );
}