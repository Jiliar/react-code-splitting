import './App.css';
import { useState } from 'react';
import Surprise from './Surprise';
import React from 'react';

//Importación dinamica con React Lazy
const Suspense = React.lazy(()=>import('./Surprise'));

function App2() {

  const [showSurprise, setShowSurprise] = useState(false)

  //returnando con react Lazy
  return (
    <div>
      
        <button onClick={(ev)=> setShowSurprise(true)}>¡Show Surprise!</button>
        {
          //fallback: Muestra un componente mientras que la Promesa gestiona el componente requerido
          showSurprise &&  <React.Suspense fallback={<p>Cargando...</p>} > <Surprise/> </React.Suspense>
        }
      
    </div>
  );
}

export default App2;
