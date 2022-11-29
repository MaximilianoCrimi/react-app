import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

  const onAdd = (cantidad)=>{
    console.log(`se ha agregado ${cantidad} `)
  }

  return (
    <div>
        <h1 className="text-5xl text-orange-500 font-bold underline">{greeting}</h1>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer