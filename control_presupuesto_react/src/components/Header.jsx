import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

function Header({presupuesto,setPresupuesto,validoPresupuesto,setValidoPresupuesto,setModal,setAnimarModal,setGastos,gastos,gastado,setDisponible,disponible,setGastoEditar,botonNuevoGasto,porcentaje}) {

  const [clickPresupuesto,setClickPresupuesto]=useState(JSON.parse(localStorage.getItem('clickPresupuesto')) ?? false);
  useEffect(()=>{
      localStorage.setItem('clickPresupuesto',JSON.stringify(clickPresupuesto));
  },[clickPresupuesto])

  return (
    <div className=" bg-green-800 h-56 text-center p-1">
        {validoPresupuesto & clickPresupuesto ? (
            <>
            <h2 className='p-7 text-2xl md:text-4xl text-slate-50 font-bold'>Control de Presupuesto</h2>
            <ControlPresupuesto
            validoPresupuesto={validoPresupuesto}
            setValidoPresupuesto={setValidoPresupuesto}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setModal={setModal}
            setAnimarModal={setAnimarModal}
            gastos={gastos}
            gastado={gastado}
            setDisponible={setDisponible}
            disponible={disponible}
            setGastos={setGastos}
            setGastoEditar={setGastoEditar}
            botonNuevoGasto={botonNuevoGasto}
            porcentaje={porcentaje}
            setClickPresupuesto={setClickPresupuesto}
            />
            </>
        ) : (
            <>
            <h2 className='p-7 text-4xl text-slate-50 font-bold'>PLANIFICADOR DE GASTOS</h2>
            <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setValidoPresupuesto={setValidoPresupuesto}
        setClickPresupuesto={setClickPresupuesto}
        />
            </>
        )

            
        }
        
    </div>
  )
}

export default Header
