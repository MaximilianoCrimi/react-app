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
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_985989-MLA42410665763_062020-F.webp",
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