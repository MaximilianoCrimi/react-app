import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ saga, tomo, precio, imagen, id, stock }) => {
    const onAdd = (cantidad) => {
        console.log(`se ha agregado ${cantidad} `)
    }
    return (
        
        <div>
            <div className='flex flex-row justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl m-3 ">
                    <figure className='w-80 mt-10 ml-5'><img src={imagen} alt={saga} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{`Saga: ${saga}`}</h2>
                        <p>{`Tomo: ${tomo}`}</p>
                        <p>{`Precio: $${precio}`}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/item/${id}`}><button className='btn btn-primary'>ver detalle</button></Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>        
    )
}

export default Item