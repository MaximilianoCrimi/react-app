import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const {id} = useParams();
    //console.log(id);
    const [item, setItem] = useState([])

    
    // const getProducts = ()=> new Promise((resolve, reject)=>{
    //     setTimeout(()=>
    //     resolve(MANGA.find(p => p.id == id)),2000)
    // })
    
    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Manga', id);
        getDoc(queryDoc).then(res=> setItem({id: res.id, ...res.data()}))

    },[])
    
   // const{saga, tomo, precio, imagen, stock}= item;

      return (
        <div>
            <ItemDetail item = {item}/>
        </div>
      )
}

export default ItemDetailContainer