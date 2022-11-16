import React from 'react'
import PropTypes from 'prop-types';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


function MostrarGasto({i,formatoDinero,eliminarGasto,setGastoEditar}) {

  const leadingActions =()=>(
      <LeadingActions>
        <SwipeAction onClick={()=>setGastoEditar(i)}>
            Editar
        </SwipeAction>
      </LeadingActions>
  )

  const trailingActions=()=>(
      <TrailingActions>
          <SwipeAction onClick={()=>eliminarGasto(i.id)}>
            Eliminar
        </SwipeAction>
      </TrailingActions>
  )


  return (
    <SwipeableList>
      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >
    <div className=' w-full mx-auto flex  rounded-xl bg-white  shadow-xl items-center mb-5'>
        <div className=' md:w-1/6' >
            <img className='p-4 lg:p-6' src={i.imagen} alt="" />
        </div>
        <div className='text-start flex-grow my-2 md:mx-3 '>
            <h2 className=' text-black text-opacity-50 mb-1 text-2xl font-bold'>{i.categoria.toUpperCase()} <span className=''><img className='inline mb-2 w-7 md:w-0' src={i.imagen} alt="" /></span> </h2>
            <h2 className='text-2xl font-bold mb-1'> {i.nombreGasto.toUpperCase()}</h2>
            <h2 className='text-black text-xl font-semibold text-opacity-60'>Creado: <span>{i.fecha}</span> </h2>
        </div>
        <div className='flex-grow'>
        <h2 className='text-green-700 font-bold text-2xl m-5'> {formatoDinero(i.cantidad)}</h2>
        </div>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default MostrarGasto
