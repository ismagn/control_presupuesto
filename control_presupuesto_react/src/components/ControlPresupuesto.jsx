import React, { useEffect, useState } from 'react'
import MostrarGasto from './MostrarGasto'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Filtro from './Filtro';


function ControlPresupuesto({presupuesto,validoPresupuesto,setValidoPresupuesto,setGastos,gastos,gastado,setDisponible,disponible,setGastoEditar,botonNuevoGasto,porcentaje,setPresupuesto,setClickPresupuesto}) {

    const [filtro,setFiltro]=useState();
    const [gastosFiltro,setGastosFiltro]=useState();

    useEffect(()=>{
        const gastosActualizados = gastos.filter(i=>i.categoria==filtro)
        setGastosFiltro(gastosActualizados)
    },[filtro])

    const confirmarResetearApp=()=>{
        const res = confirm("¿Estas seguro de que deseas borrar todos los datos actuales?")
        if (res) {
            resetearApp()
        }
    }
    const resetearApp=()=>{
        setPresupuesto("")
        setGastos([])
        setClickPresupuesto(false)
        setValidoPresupuesto(false)
    }

   
    const eliminarGasto=(id)=>{
        const gastosActualizados = gastos.filter(i=>i.id !==id);
        const res = confirm("deseas eliminar el gasto")
        console.log(gastosActualizados);
        if (res) {
            setGastos(gastosActualizados)
        }
    }

    setDisponible(presupuesto-gastado)

    const formatoDinero = (cantidad) =>{
        return cantidad.toLocaleString('en-us',{
            style:'currency',
            currency:'USD'
        })
    }

    

  return (
    <div className=' lg:mx-20'>
    <div className=' bg-slate-50 p-3 w-full md:w-3/5 mx-auto rounded-md shadow-2xl mb-10'>
        <div className='grid grid-cols-2'>
        <div className='grafica w-4/6 mx-auto font-bold'>
            <CircularProgressbar
                value={porcentaje}
                text={'has gastado: %'+porcentaje}
                counterClockwise={true}
                circleRatio={0.9}
                styles={{
                    path:{
                        stroke: porcentaje > 100 ? 'rgb(235, 0, 0)' :'rgb(62, 152, 119)',
                       
                    },
                    text:{
                        fill: porcentaje > 100 ? 'rgb(235, 0, 0)' :'rgb(62, 152, 119)',
                        fontSize: '8px'
                    },

                }}
            />
        </div>
        <div className=' my-auto '>
            <div className='mx-auto text-sm cursor-pointer  mb-5 md:mb-8 p-1 md:p-2 bg-red-700 w-2/3  text-white rounded-lg '>
                <input className='cursor-pointer' type="button" value="RESETEAR APP" 
                onClick={confirmarResetearApp}
                />
            </div>
        <p className='text-green-800 font-bold text-sm md:text-xl'>Presupuesto: <span className='text-black'>{formatoDinero(presupuesto)}</span></p>
        <p className={` font-bold ${disponible<=0 ? "text-red-500" : "text-green-800"} text-sm md:text-xl`}>Disponible: <span className='text-black'>{formatoDinero(disponible)}</span></p>
        <p className='text-green-800 font-bold text-sm md:text-xl'>Gastado: <span className='text-black'>{formatoDinero(gastado)}</span></p>
        </div>
        </div>
    </div>

<div>
    <Filtro
    setFiltro={setFiltro}
    filtro={filtro}
    />
</div>

<div className='md:w-3/4 mx-auto'>
    <h2 className='m-5 font-extrabold text-3xl opacity-60 text-start'>{Object.keys(gastos).length>0 ? "GASTOS" : "AGREGA UN GASTO"}</h2>
    <p className='m-3 animate-pulse  text-green-600'>{Object.keys(gastos).length>0 ? "<<-Para editar o borrar un gasto, desliza a la derecha o izquierda->>" : ""}</p>
    
    <div className=''>
{filtro ? (gastosFiltro.map((i)=>(
    <MostrarGasto
    i={i} 
    key={i.id}
    formatoDinero={formatoDinero}
    eliminarGasto={eliminarGasto}
    setGastoEditar={setGastoEditar}
    
    />
))):(
    (gastos.map((i)=>(
        <MostrarGasto
        i={i} 
        key={i.id}
        formatoDinero={formatoDinero}
        eliminarGasto={eliminarGasto}
        setGastoEditar={setGastoEditar}
        
        />
))))}
    </div>
</div>



    {validoPresupuesto | presupuesto && 
      <div className='nuevo-gasto fixed bottom-5 cursor-pointer right-5 animate-bounce hover:animate-none '>
        <button className=' hover:scale-110  duration-300 rounded-full w-12 h-12 bg-green-800 text-5xl text-white cursor-pointer'
        onClick={botonNuevoGasto}
        >+</button>
      </div>
      }
    </div>
  )
}

export default ControlPresupuesto
