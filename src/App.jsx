import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import Eventos from './components/Eventos'
import Eventos2 from './components/Eventos2'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizado'
import Referencias from './components/Referencias'
import Formularios from './components/Formularios'
import FormularioAvanzado from './components/FormularioAvanzado'
import Estilos from './components/Estilos'
import ComponentesEstilizados from './components/ComponentesEstilizados'

function App() {
  const [count, setCount] = useState(0)
  const estaciones = ["spring", "summer", "fall", "winter"];

  return (
    <div>
      <ul>
        {estaciones.map( (el, index) => <li key={index}>{el}</li>)}
      </ul>
    <section>
      <Componente msj= "hola soy un componente... "/>
      <hr />

      <Propiedades 
      cadena="Esto es un string" 
      numero={19}
      bool={true}
      arreglo={[1,2,3]}
      objeto={{nombre:"hache", direccion:"St fake 123"}}
      funcion={(num) => num*num}
      elementoReact={<em>Esto es un elemento React</em>}
      componenteReact={<Componente msj="componente por PROPS"/>}
      />
      <Propiedades/>
      <hr />
      <Estado/>
      <hr />
      <RenderizadoCondicional/>
      <hr />
      <RenderizadoElementos/>
      <hr />
      <Eventos/>
      <hr />
      <Eventos2/>
      <hr />
      <ComunicacionComponentes/>
      <hr/>
      <CicloVida/>
      <hr />
      <AjaxApis/>
      <hr />
      <ContadorHooks/>
      <hr />
      <ScrollHooks/>
      <hr />
      <RelojHooks/>
      <hr />
      <AjaxHooks/>
      <hr />
      <HooksPersonalizados/>
      <hr />
      <Referencias/>
      <hr />
      <Formularios/>
      <hr/>
      <FormularioAvanzado/>
      <hr/>
      <Estilos/>
      <hr/>
      <ComponentesEstilizados/>
    </section>
    </div>
  )
}

export default App
