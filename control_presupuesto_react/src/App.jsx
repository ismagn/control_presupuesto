
import { useEffect, useState } from 'react'
import './App.css'
import "tailwindcss/tailwind.css"
import Header from './components/Header'
import VentanaModal from './components/VentanaModal'



function App() {
  const [presupuesto,setPresupuesto]=useState(JSON.parse(localStorage.getItem('presupuesto')) ?? []);
  const [disponible,setDisponible]=useState(0);
  const [gastado,setGastado]=useState(0);
  const [validoPresupuesto,setValidoPresupuesto]=useState(false);
  const [modal,setModal]=useState(false);
  const [animarModal,setAnimarModal]=useState(false);
  const [gastos,setGastos]=useState(JSON.parse(localStorage.getItem('gastos')) ?? []);
  const [gastoEditar,setGastoEditar]=useState({});
  const [porcentaje,setPorcentaje]=useState(0);
  
  useEffect(()=>{
    localStorage.setItem('presupuesto',JSON.stringify(presupuesto))
  },[presupuesto])

  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(gastos));
    const o=gastos.map(i=>i.cantidad)
    const suma = o.reduce((numAnterior,acumulador)=>numAnterior+acumulador,0);
    setGastado(suma)
  },[gastos])
      

  useEffect(()=>{
    const nuevoPorcentaje = (((presupuesto-disponible)/presupuesto)*100).toFixed(2)
    setPorcentaje(nuevoPorcentaje)
  },[disponible])


  const botonNuevoGasto = () =>{
    setModal(true);

    setTimeout(()=>{
        setAnimarModal(true);
    },0);

  }
    
  useEffect(()=>{
    if (Object.keys(gastoEditar).length>0) {
      botonNuevoGasto()
    }
  
},[gastoEditar])


  return (
    <>
      
      <Header
      setDisponible={setDisponible}
      disponible={disponible}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      validoPresupuesto={validoPresupuesto}
      setValidoPresupuesto={setValidoPresupuesto}
      setModal={setModal}
      setAnimarModal={setAnimarModal}
      setGastos={setGastos}
      gastos={gastos}
      gastado={gastado}
      setGastoEditar={setGastoEditar}
      botonNuevoGasto={botonNuevoGasto}
      porcentaje={porcentaje}
      
      />
      {modal &&
        <VentanaModal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        setGastos={setGastos}
        gastos={gastos}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
        
        />
      }

      
    </>
  )
}

export default App
