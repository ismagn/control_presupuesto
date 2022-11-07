import React from 'react'
import { useState } from 'react'

function NuevoPresupuesto({presupuesto,setPresupuesto,setValidoPresupuesto}) {

    const [error,setError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (presupuesto<0){
            setError(true)
            setValidoPresupuesto(false)
        }else{
            setError(false)
            setValidoPresupuesto(true)
        }

        console.log( presupuesto);
    }

    return (
    <div className=' bg-slate-50 p-4 lg:w-2/5 md:w-3/4 mx-auto rounded-md shadow-md'>
        
        <form className=" h-46 w-full block" action=""
            onSubmit={handleSubmit}
            >
            <div className=" w-full mb-5" >
            <label className='text-lg text-green-700 font-bold p-4 block' htmlFor="">Definir Presupuesto</label>
            <input className='rounded-md w-full border-2 mt-2 p-2 hover:border-green-700' type="number"
            placeholder='ingresa el presupuesto'
            value={presupuesto}
            onChange={(e)=> setPresupuesto(Number(e.target.value))}
            />
            <button className='mt-3 p-2 w-full text-slate-50 font-bold bg-green-800' type="submit">Añadir</button>
            </div>
        </form>
            {error &&
            <div>
                <p className='text-red-600'>*ingresa un valor valido*</p>
            </div>
            }
    </div>
    )
}

export default NuevoPresupuesto
