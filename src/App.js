import React, { Fragment } from 'react';
import Jsx from './components/Jsx'
import List from './components/List'
import Forms from './components/Forms'
import FormHooks from './components/FormHooks'
import EjemploUno from './components/EjemploUno'
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {

  const sujeto={
    nombre:'juanito',
    urlImage:'https://via.placeholder.com/64',
    texto:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }

  return (
    <Fragment>
    <div className="jumbotron">
    <h1>Components </h1>      
    </div>        
    <div className="conatainer mt-2">
      {/* <h1>Hola JSX</h1> */}
      {/* <Jsx/> */}
      {/* <List/> */}
      {/* <Forms/> */}
      {/* <FormHooks/> */}
      {/* <EjemploUno/> */}
      {/* <Saludo persona="Juanito" edad={30}/>
      <Saludo persona="Ignacio"edad={41}/>
      <Saludo persona="Catalina"edad={25}/> */}
      <Comentario sujeto={sujeto} />
    </div>

    </Fragment>
  );
}

export default App;
