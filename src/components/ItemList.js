import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'


const ItemList = () => {

const [products, setProducts] = useState([])

const { idCategory } = useParams();


useEffect(()=>{

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Manga');
    
    
    if (idCategory) {
        
        const queryFilter = query(queryCollection, where('saga','==',idCategory))
        getDocs(queryFilter)
        .then(res=> setProducts(res.docs.map(p=> ({id: p.id, ...p.data()})))) 
        // getProducts().then(response =>{
        //     setProducts(response.filter(product=> product.saga===idCategory))
        // })

    } else{
        getDocs(queryCollection)
        .then(res=> setProducts(res.docs.map(p=> ({id: p.id, ...p.data()})))) 
        // getProducts().then(response =>{
        //     setProducts(response)
        // })
    }
    

},[idCategory])




  return (
    <div>
        
        {
          products.length?  
            products.map(p => <Item key={p.id} {...p}/>)
          :
          <progress className="progress w-56 ml-[50%]" >cargando...</progress>
        }
        
    </div>
  )
}

export default ItemList