import './App.css';
import claaroNutriLogo from "./img/logo3.png"
import Boton from "./componentes/Boton"
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setnumClicks]= useState(0)

  const manejarClick=()=>{
    setnumClicks(numClicks + 1)
  }

    const reiniciarContador=()=>{
      setnumClicks(0)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={claaroNutriLogo} className="free-codecamp-logo" alt="logo-freecodecamp" />
      </div>
      <div className="contenedor-principal">
        <div className="contenedor-contador">
        <Contador numClicks={ numClicks }/>
        </div>
        <div className="contenedor-botones">
        <Boton
        texto="Click"
        esBotonClick={ true }
        manejarClick={ manejarClick }
        />
        <Boton
        texto="Reiniciar"
        esBotonClick={ false }
        manejarClick={ reiniciarContador }
        />
        </div>
      </div>
    </div>
  );
}

export default App;
