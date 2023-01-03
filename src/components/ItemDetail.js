import React, { useState, useEffect, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import Return from './Return'
import { CartContext } from '../context/cartContext'


const ItemDetail = ({item }) => {

    const [cant, setCant] = useState(1);
    const [purchase, setPurchase] = useState(false)
    useEffect(() => {
    
      return () => {
        onAdd()
        console.log(cant);
      }
    }, [cant])
    

    const onAdd = (count) => {
        setCant(count)
    }

    const {addToCart, cart} = useContext(CartContext);
    const handlerAddToCart = () => { 
        addToCart(item, cant);
        setPurchase(!purchase)
     }

     console.log(cart);


    return (
        <div>
            <div className='flex flex-row '>
                <div className="card w-96 bg-base-100 shadow-xl m-3 ">
                    <figure className='w-80 mt-10 ml-5'><img src={item.imagen} alt={item.saga} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{`Saga: ${item.saga}`}</h2>
                        <p>{`Tomo: ${item.tomo}`}</p>
                        <p>{`Precio: $${item.precio}`}</p>
                        <div className="card-actions justify-end">
                            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                            {
                                !purchase?
                                <button className="btn btn-primary"  onClick={handlerAddToCart}>Agregar al carrito</button>
                                :
                                <Link to={'/cart'}><button className='btn btn-primary'>Finalizar compra</button></Link>
                            }
                            <Return/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail