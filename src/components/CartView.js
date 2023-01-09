import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
const CartView = () => {

    const { totalProductsCart, totalPriceCart, cart, emptyCart, deleteProductById } = useContext(CartContext)


    const handlerDeleteProduct = (id) => {
        deleteProductById(id)
    }

    return (

        <>
            { cart.length?
                cart.map(item => (
                  
                    <div key={item.id} className='w-[60%] mt-10 h-48 flex-col m-40 items-end'>
                        <div className="card card-side mt-20 bg-base-100 shadow-xl  p-20 border">
                            <figure><img src={item.imagen} alt={item.saga}  className='w-28'/></figure>
                            <div className="card-body w-80 ">
                                <h2 className="card-title text-6xl">Saga {item.saga}</h2>
                                <p className='text-4xl'>Tomo: {item.tomo}</p>
                                <p className='text-4xl'>$ {item.precio}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={()=>handlerDeleteProduct(item.id)}>Borrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                        ))
                    :

                    
                        <h1 className='text-8xl items-center justify-center	 mt-80 flex'>El carrito está vacío</h1>
                   
                }
                {cart.length
                ?
                <div>
                <h3 className='text-6xl mt-80 text-center '>Total:$ {totalPriceCart()}</h3>
                <div className='flex flex-row space-x-[40%]'>
                <button onClick={()=>emptyCart()} className="btn btn-wide btn-primary ml-20 mt-20 text-xl text-center flex items-center justify-center">Vaciar carrito</button>
                <Link to={'/CheckOut'} ><button className="btn btn-wide btn-primary mt-20 text-xl text-center flex items-center justify-center">Emitir compra</button></Link>
                </div>
                </div>
                :
                <h2 className='text-7xl'></h2>
                }    
        </>
    )
}

export default CartView