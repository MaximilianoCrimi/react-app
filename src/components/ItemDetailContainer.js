import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const {id} = useParams();

    const [item, setItem] = useState([])
    
    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Manga', id);
        getDoc(queryDoc).then(res=> setItem({id: res.id, ...res.data()}))

    },[])
    
      return (
        <div>
            <ItemDetail item = {item}/>
        </div>
      )
}

export default ItemDetailContainer