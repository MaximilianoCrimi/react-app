import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className="text-5xl text-orange-500 font-bold underline">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer