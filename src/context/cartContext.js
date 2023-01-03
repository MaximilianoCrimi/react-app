import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => { 
    if(cart.length===0){
        setCart([{
            ...item,
            cant: 1
        }])
    }else{
        const findedProduct = cart.find(p => p.id===item.id);
        if(!findedProduct){
            setCart([
                ...cart,
                {
                    ...item,
                    cant:cant
                }
            ])
        }else{
            const filteredProducts = cart.filter(p => p.id !== item.id)
            setCart([
                ...filteredProducts,
                {...findedProduct,
                    cant: findedProduct.cant +1
                }
            ])
        }
    }
   }

   const totalProductsCart = () =>{
    return cart.reduce((acc, item) => acc + item.cant, 0)
   }

   const totalPriceCart = () => { 
    return cart.reduce((acc, item) => acc + item.cant * item.precio, 0)
    }

    const emptyCart = () => { 
        setCart([])
     }

     const deleteProductById = (id) => { 
        const filterProduct = cart.filter((p)=> p.id !== id)
        setCart(filterProduct)
      }

  return (

    <CartContext.Provider value={
        {
            cart,
            addToCart,
            totalPriceCart,
            totalProductsCart,
            emptyCart,
            deleteProductById
        }}>
        {children}

    </CartContext.Provider>

  )
}

