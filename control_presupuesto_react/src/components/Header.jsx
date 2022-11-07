import React from 'react'
import { useState } from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

function Header({presupuesto,setPresupuesto,validoPresupuesto,setValidoPresupuesto}) {

  return (
    <div className=" bg-green-800 h-52 text-center">
        {validoPresupuesto ? (
            <>
            <h2 className='p-7 text-4xl text-slate-50 font-bold'>Control de Presupuesto</h2>
            <ControlPresupuesto
            presupuesto={presupuesto}
            />
            </>
        ) :
            <>
            <h2 className='p-7 text-4xl text-slate-50 font-bold'>PLANIFICADOR DE GASTOS</h2>
            <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setValidoPresupuesto={setValidoPresupuesto}
        />
            </>
        }
        
    </div>
  )
}

export default Header
