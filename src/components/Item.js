import React from 'react'
import ItemCount from './ItemCount'

const Item = ({saga, tomo, precio, imagen, id, stock}) => {
    const onAdd = (cantidad)=>{
        console.log(`se ha agregado ${cantidad} `)
      }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-3">
                <figure><img src={imagen} alt={saga} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{`Saga: ${saga}`}</h2>
                    <p>{`Tomo: ${tomo}`}</p>
                    <p>{`Precio: $${precio}`}</p>
                    <div className="card-actions justify-end">
                        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item