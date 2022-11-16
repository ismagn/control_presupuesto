import React from 'react'

export default function Filtro({setFiltro,filtro}) {
    return (
        <div className='bg-white pt-2 mb-6 md:pt-3 rounded-2xl shadow-md w-5/6 md:w-2/5 mx-auto'>
            <form  action="" id='filtro'>
            <label className='lg:text-xl font-extrabold opacity-60 px-2' htmlFor="filtrar">Filtrar por Categoria</label>
                    <select className='mt-2 w-1/4 rounded-md h-10 mb-5 shadow-md border-2' name="" id="filtrar"
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="" selected >Todos</option>
                        <option value="shein">Shein</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="online">Online</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="extra">compras extra</option>
                    </select>
            </form>
        </div>
    )
    }
