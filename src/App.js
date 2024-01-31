import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import crispdevpslogo from './imagenes/logo crispdevps.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={crispdevpslogo}
          alt='logo crispdevps' />
        <h1 className='texto-logo'>Crispdevs</h1>
      </div>
      <div className='contenedor-contador'>
        <Contador numClics= {numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
