import React from 'react'
import { useForm } from "react-hook-form"
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/cartContext'
import Swal from 'sweetalert2'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const { totalProductsCart, emptyCart, totalPriceCart, cart } = useContext(CartContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [alert, setAlert] = useState(false)
  const [id, setId] = useState()


  const onSubmit = (data) => {
    setAlert(true)
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, ({ ...data, ...cart, }))
      .then(({ id }) => setId(id))
  }



  return (

    <>{!alert ?
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Check Out
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-gray-800"
              >
                Nombre
              </label>
              <input
                type="text"
                {...register('nombre', {
                  required: true,
                })}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.nombre?.type === 'required' && <p className='text-red-600'>Campo requerido</p>}
            </div>
            <div className="mb-2">
              <label
                htmlFor="direccion"
                className="block text-sm font-semibold text-gray-800"
              >
                Dirección
              </label>
              <input
                type="text"
                {...register('direccion', {
                  required: true
                })}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.direccion?.type === 'required' && <p className='text-red-600'>Campo requerido</p>}
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="text"
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.email?.type === 'required' && <p className='text-red-600'>Campo requerido</p>}
              {errors.email?.type === 'pattern' && <p className='text-red-600'>Email no valido</p>}
            </div>
            <div className="mb-2">
              <label
                htmlFor="telefono"
                className="block text-sm font-semibold text-gray-800"
              >
                Telefono
              </label>
              <input
                type="text"
                {...register('telefono', {
                  required: true
                })}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.telefono?.type === 'required' && <p className='text-red-600'>Campo requerido</p>}
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      :

      <div>
        <div className="alert shadow-lg mt-96">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <h3 className="font-bold">Gracias por su compra</h3>
              <div className="text-xs">Su orden de compra es: {id}</div>
            </div>
          </div>
          <div className="flex-none">
            <Link to={'/'}><button onClick={emptyCart} className="btn btn-sm">Volver al Home</button></Link>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Formulario