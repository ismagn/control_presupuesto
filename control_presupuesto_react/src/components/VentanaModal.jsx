    import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import icono_ahorro from '../img/icono_ahorro.svg'
import icono_casa from '../img/icono_casa.svg'
import icono_comida from '../img/icono_comida.svg'
import icono_gastos from '../img/icono_gastos.svg'
import icono_salud from '../img/icono_salud.svg'
import icono_suscripciones from '../img/icono_suscripciones.svg'
import shein from '../img/shein.png'
import mouse from '../img/mouse.png'

    function VentanaModal({setModal,animarModal,setAnimarModal,setGastos,gastos,gastoEditar,setGastoEditar}) {
        const [nombreGasto,setNombreGasto]=useState("")
        const [cantidad,setCantidad]=useState("")
        const [categoria,setCategoria]=useState("")
        const [error,setError]=useState(false)
        
        useEffect(()=>{
            if (Object.keys(gastoEditar).length>0) {
                setNombreGasto(gastoEditar.nombreGasto)
                setCantidad(gastoEditar.cantidad)
                setCategoria(gastoEditar.categoria)
            }
        },[])

      const  accionesCerrarBtn =()=>{
        setModal(false)
        setAnimarModal(false)
        setGastoEditar({})
      }

      const generarImagen=()=>{
        let img=null
        if (categoria=="ahorro") {
             img = icono_ahorro
        }else if(categoria=="comida"){
             img = icono_comida
        }else if(categoria=="casa"){
            img = icono_casa
       }else if(categoria=="online"){
        img = mouse
        }else if(categoria=="salud"){
            img = icono_salud
       }else if(categoria=="suscripciones"){
        img = icono_suscripciones
        }else if(categoria=="extra"){
            img = icono_gastos
       }else if(categoria=="shein"){
        img = shein
   }
        return img
      }

      const generarId=()=>{
        let rand=Date.now()
        return rand
      }

      const generarFecha = ()=>{
        const fechaNueva = new Date();
        const opciones = {
            year:'numeric',
            month: 'long',
            day: '2-digit'
        }
        return fechaNueva.toLocaleDateString('es-ES',opciones)
      }

      
      const handleSubmit=(e)=>{
        e.preventDefault();
        if (nombreGasto=="" || cantidad<=0 || categoria==""){
            setError(true)
        }else{
            setError(false)
            setModal(false)
            setAnimarModal(false)
           const objetoGasto ={
            nombreGasto,
            cantidad,
            categoria
           }
           
                

           if (gastoEditar.id) {
                objetoGasto.id=gastoEditar.id
                objetoGasto.imagen=generarImagen()
                objetoGasto.fecha=gastoEditar.fecha
                const gastosActualizados=gastos.map(i => i.id === gastoEditar.id ? objetoGasto : i)
                setGastos(gastosActualizados)
                setGastoEditar({})
           }else{
                objetoGasto.id=generarId()
                objetoGasto.imagen=generarImagen()
                objetoGasto.fecha=generarFecha()
                
                setGastos([...gastos,objetoGasto])
                
           }
           
        }
      }
    return (
        <div className={`  bg-black h-screen w-full  fixed top-0 opacity-95 `}>
            <p className='boton_cerrar cursor-pointer text-2xl text-center text-black mt-32 xl:mt-3 bg-slate-100 rounded-full w-8 mx-auto'
            onClick={accionesCerrarBtn}
            >X</p>
            <form className={`modal ${animarModal ? "animar" :""} mx-auto mt-8 shadow-lg w-5/6 lg:w-2/4 bg-zinc-100 h-2/4 xl:h-5/6 p-5`} action=""
            onSubmit={handleSubmit}>
                <h2 className='animate-pulse font-bold text-center text-3xl' >{gastoEditar.id ? "EDITAR GASTO" : "NUEVO GASTO"}</h2>
                <hr className='bg-green-700 h-1'/>
                <div className='p-5'>
                    <label className='block text-xl font-bold mb-2' htmlFor="nombreGasto">Nombre Gasto</label>
                    <input className=' w-full rounded-md h-10 mb-10 text-center' type="text" id='nombreGasto' 
                    value={nombreGasto}
                    onChange={e => setNombreGasto(e.target.value)} />

                    <label className='block text-xl font-bold mb-2' htmlFor="Cantidad">Cantidad</label>
                    <input className='w-full rounded-md h-10 mb-10 text-center' type="number" id='Cantidad' 
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}/>

                    <label className='block text-xl font-bold mb-2' htmlFor="filtrar">Filtrar Gastos</label>
                    <select className=' w-full rounded-md h-10 mb-10 ' name="" id="filtrar"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="" selected disabled className='text-center' >--seleccione--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="shein">Shein</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="online">Online</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="extra">compras extra</option>
                    </select>
                    <input className='block w-full bg-green-700 hover:bg-green-600 h-10 rounded-md text-white' type="submit" value={gastoEditar.id ? "ACTUALIZAR GASTO" : "AÑADIR GASTO"}/>

                    {error &&
                        <p className='text-center text-red-600'>*faltan campos por llenar*</p>
                    }
                </div>
            </form>
        </div>
    )
    }

    export default VentanaModal
