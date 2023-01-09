import React from 'react'
import { useForm } from "react-hook-form"
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/cartContext'
import Swal from 'sweetalert2'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Formulario = () => {
  const { totalProductsCart, totalPriceCart, cart } = useContext(CartContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [alert, setAlert] = useState(false)
  const [id, setId] = useState()

  
  const onSubmit = (data) => {
    setAlert(true)
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, ({data, ...cart}))
    .then(({id} )=> setId(id))
  }

  useEffect(() => {
    


  }, [])
  


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
        {Swal.fire({
          title: `Gracias por su compra`,
          text: `Su orden de compra es: ${id}`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        }
      </div>
    }
    </>
  )
}

export default Formulario