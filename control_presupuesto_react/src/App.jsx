import { useState } from 'react'
import './App.css'
import "tailwindcss/tailwind.css"
import Header from './components/Header'


function App() {
  const [presupuesto,setPresupuesto]=useState();
  const [validoPresupuesto,setValidoPresupuesto]=useState(false);
  return (
    <>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      validoPresupuesto={validoPresupuesto}
      setValidoPresupuesto={setValidoPresupuesto}

      />
      <div className='nuevo-gasto fixed bottom-5 right-5'>
        <button className=' rounded-full w-12 h-12 bg-green-800 text-5xl text-white '>+</button>
      </div>
    </>
  )
}

export default App
