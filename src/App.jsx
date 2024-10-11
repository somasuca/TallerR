import { useState } from 'react'
import './App.css'
import Saludo from './ejercicios/1'
import SaludoDos from './ejercicios/2'
import Contenedor from './ejercicios/3'
import Contador from './ejercicios/4'
import Boton from './componentes/boton';

function App() {

  const [numClicks, CantClick] = useState(0);
  
  const manejarClic = () => {
    CantClick(numClicks + 1);
  }
  
  const reiniciarConatdor = () => {
    CantClick(0)
  }
  return (
    <div className="App">
      <Saludo 
        nombre='usmecito'
      />
      <SaludoDos 
        nombre='usmecito'
        idioma='it'
      />
      <Contenedor>
        <h1>hola</h1>
        <p>amiguitos del choco</p>
      </Contenedor>

      <Contador numClicks={numClicks} />
        <Boton 
          texto='clic'  
          esBotonclic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='reiniciar'  
          esBotonclic={false}
          manejarClic={reiniciarConatdor}
        />

    </div>

  )
}

export default App
