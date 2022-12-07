import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MANGA = [
    {
        id:1,
        saga: "Saiajin",
        tomo: 1,
        precio: 3800,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_700891-MLA51965712612_102022-F.webp",
        stock: 20
    },
    {
        id:2,
        saga: "Saiajin",
        tomo: 2,
        precio: 2699,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_975293-MLA47744011914_102021-F.webp",
        stock: 12
    },
    {
        id:3,
        saga: "Saiajin",
        tomo: 3,
        precio: 3420,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_722743-MLA47902806038_102021-F.webp",
        stock: 9
    },
    {
        id:4,
        saga: "Freezer",
        tomo: 1,
        precio: 3740,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_868197-MLA49502063948_032022-F.webp",
        stock: 23
    },
    {
        id:5,
        saga: "Freezer",
        tomo: 2,
        precio: 4790,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_838093-MLA51719876779_092022-F.webp",
        stock: 20
    },
    {
        id:6,
        saga: "Freezer",
        tomo: 3,
        precio: 3600,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_614843-MLA49462704943_032022-F.webp",
        stock: 14
    },
    {
        id:7,
        saga: "Freezer",
        tomo: 4,
        precio: 2900,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_935491-MLA47373949524_092021-F.webp",
        stock: 19
    },
    {
        id:8,
        saga: "Freezer",
        tomo: 5,
        precio: 6240,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_995432-MLA47373949989_092021-F.webp",
        stock: 3
    },
    {
        id:9,
        saga: "Cell",
        tomo: 1,
        precio: 5210,
        imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/eb/2d/eb2d4fc27162b5e933f4528083366acd.jpg",
        stock: 25
    },
    {
        id:10,
        saga: "Cell",
        tomo: 2,
        precio: 7000,
        imagen: "https://cdnx.jumpseller.com/shazam-online/image/15988331/dbcolorcell02.jpg?1633549050",
        stock: 7
    },
    {
        id:11,
        saga: "Cell",
        tomo: 3,
        precio: 4700,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 20
    },
    {
        id:12,
        saga: "Cell",
        tomo: 4,
        precio: 5500,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_626936-MLA49350066774_032022-F.webp",
        stock: 29
    },
    {
        id:13,
        saga: "Cell",
        tomo: 5,
        precio: 2900,
        imagen: "data:image/jpeg;base64,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",
        stock: 15
    }, {
        id:14,
        saga: "Cell",
        tomo: 6,
        precio: 4000,
        imagen: "https://cdn.normacomics.com/media/catalog/product/cache/1/image/588x473/9df78eab33525d08d6e5fb8d27136e95/p/o/portada_dragon-ball-color-cell-n-0606_akira-toriyama_201602051144.jpg",
        stock: 26
    },
    {
        id:15,
        saga: "Majin Boo",
        tomo: 1,
        precio: 4500,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_822872-MLA41780409266_052020-F.webp",
        stock: 15
    },
    {
        id:16,
        saga: "Majin Boo",
        tomo: 2,
        precio: 4000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_855443-MLA41780406670_052020-F.webp",
        stock: 26
    },
    {
        id:17,
        saga: "Majin Boo",
        tomo: 3,
        precio: 3500,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_978088-MLA41780508774_052020-F.webp",
        stock: 25
    },
    {
        id:18,
        saga: "Majin Boo",
        tomo: 4,
        precio: 6200,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_877180-MLA49463127705_032022-F.webp",
        stock: 29
    },
    {
        id:19,
        saga: "Majin Boo",
        tomo: 5,
        precio: 3800,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_708033-MLA50497323693_062022-F.webp",
        stock: 7
    },
    {
        id:20,
        saga: "Majin Boo",
        tomo: 6,
        precio: 8200,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_839831-MLA49462818364_032022-F.webp",
        stock: 20
    },

];






const ItemDetailContainer = () => {
    const {id} = useParams();
    console.log(id);
    const [item, setItem] = useState([])

    
    const getProducts = ()=> new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(MANGA.find(p => p.id == id)),2000)
    })
    
    useEffect(()=>{
        getProducts().then(response =>{
            setItem(response)
        })
    },[])
    
    const{saga, tomo, precio, imagen, stock}= item;

      return (
        <div>
            <ItemDetail saga={saga} tomo={tomo} precio={precio} imagen={imagen} stock={stock}/>
        </div>
      )
}

export default ItemDetailContainer