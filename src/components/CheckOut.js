import React from 'react'
import { CartContext } from '../context/cartContext'
import { useContext } from 'react'
import Formulario from './Formulario'

const CheckOut = () => {
    const { totalProductsCart, totalPriceCart, cart } = useContext(CartContext)

  return (
      <>
    <div>
       { cart.map(item => (
         
         <div key={item.id} className='w-[60%] mt-10 h-48 flex-col m-40 items-end'>
            <div className="card card-side mt-20 bg-base-100 shadow-xl  p-20 border">
                <figure><img src={item.imagen} alt={item.saga}  className='w-28'/></figure>
                <div className="card-body w-80 ">
                    <h2 className="card-title text-6xl">Saga {item.saga}</h2>
                    <p className='text-4xl'>Tomo: {item.tomo}</p>
                    <p className='text-4xl'>$ {item.precio}</p>
                </div>
            </div>
        </div>
        ))}

    </div>


    <Formulario/>


        </>
  )
}

export default CheckOut