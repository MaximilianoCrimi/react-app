import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

  return (
    <div>
        <h1 className="text-5xl text-orange-500 font-bold underline text-center mt-40">{greeting}</h1>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer