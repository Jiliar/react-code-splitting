import './App.css';
import { useEffect, useState } from 'react';
import Surprise from './Surprise';
import React from 'react';

//Importación dinamica con React Lazy
const Suspense = React.lazy(()=>import('./Surprise'));

function App1() {

  const [showSurprise, setShowSurprise] = useState(false)

  //Usign Code Splitting con imports dinamicos
  useEffect(()=>{
      import("./Hello").then(mod=>mod.default())
  },[]);

  return (
    <div>
      <button onClick={()=> setShowSurprise(true)}>¡Show Surprise!</button>
      {
        showSurprise && <Surprise /> 
      }
    </div>
  );

}

export default App1;
