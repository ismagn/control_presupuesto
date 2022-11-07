import React from 'react'

function ControlPresupuesto({presupuesto}) {

    const formatoDinero = (cantidad) =>{
        return cantidad.toLocaleString('en-us',{
            style:'currency',
            currency:'USD'
        })
    }

  return (
    <div className=' bg-slate-50 p-4 lg:w-2/5 md:w-3/4 mx-auto rounded-md shadow-md'>
        <div className='grid grid-cols-2'>
        <div className='grafica '>
            <h1>grafica aqui</h1>
        </div>
        <div className=''>
        <p className='text-green-800'>Presupuesto: <span className='text-black'>{formatoDinero(presupuesto)}</span></p>
        <p className='text-green-800'>Presupuesto: <span className='text-black'>{formatoDinero(presupuesto)}</span></p>
        <p className='text-green-800'>Presupuesto: <span className='text-black'>{formatoDinero(presupuesto)}</span></p>
        </div>
        </div>

    </div>
    
  )
}

export default ControlPresupuesto
