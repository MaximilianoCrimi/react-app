import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)


    const plus = ()=>{
        stock > count ? setCount(count + 1) : setCount(count)
    }

    const less = ()=>{
        count > 1 ? setCount(count - 1) : setCount(count)
    }

    const add = ()=>{
        onAdd(count)
    }

  return (
    <div className='m-5 p-24'>
        <div className='flex flex-row m-5  space-x-10'>
        <button className="btn btn-outline btn-info"  onClick={less}>-</button>
        <p>{count}</p>
        <button className="btn btn-outline btn-info" onClick={plus}>+</button>
        </div>
        <button className="btn btn-primary"  onClick={add}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount