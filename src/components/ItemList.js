import React, { useState } from 'react'
import { useEffect } from 'react';
import Item from './Item';

const MANGA = [
    {
        id:1,
        saga: "Saiajin",
        tomo: 1,
        precio: 3800,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 20
    },
    {
        id:2,
        saga: "Saiajin",
        tomo: 2,
        precio: 2699,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 12
    },
    {
        id:3,
        saga: "Saiajin",
        tomo: 3,
        precio: 3420,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 9
    },
    {
        id:4,
        saga: "Freezer",
        tomo: 1,
        precio: 3740,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 23
    },
    {
        id:5,
        saga: "Freezer",
        tomo: 2,
        precio: 4790,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 20
    },
    {
        id:6,
        saga: "Freezer",
        tomo: 3,
        precio: 3600,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 14
    },
    {
        id:7,
        saga: "Freezer",
        tomo: 4,
        precio: 2900,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 19
    },
    {
        id:8,
        saga: "Freezer",
        tomo: 5,
        precio: 6240,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 3
    },
    {
        id:9,
        saga: "Cell",
        tomo: 1,
        precio: 5210,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 25
    },
    {
        id:10,
        saga: "Cell",
        tomo: 2,
        precio: 7000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
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
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 29
    },
    {
        id:13,
        saga: "Cell",
        tomo: 5,
        precio: 2900,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 15
    }, {
        id:14,
        saga: "Cell",
        tomo: 6,
        precio: 4000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 26
    },
    {
        id:15,
        saga: "Majin Boo",
        tomo: 1,
        precio: 4500,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 15
    },
    {
        id:16,
        saga: "Majin Boo",
        tomo: 2,
        precio: 4000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 26
    },
    {
        id:17,
        saga: "Majin Boo",
        tomo: 3,
        precio: 3500,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 25
    },
    {
        id:18,
        saga: "Majin Boo",
        tomo: 4,
        precio: 6200,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 29
    },
    {
        id:19,
        saga: "Majin Boo",
        tomo: 5,
        precio: 3800,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 7
    },
    {
        id:20,
        saga: "Majin Boo",
        tomo: 6,
        precio: 8200,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_887632-MLA52598236232_112022-F.webp",
        stock: 20
    },

];




const ItemList = () => {

const [products, setProducts] = useState([])

useEffect(()=>{
    console.log("empieza getProducts")
    getProducts().then(response =>{
        console.log(response)
        setProducts(response)
    })
},[])


const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(MANGA)
        },3000)
    })
}


  return (
    <div>
        {products.map(p => <Item key={p.id} {...p}/>)}
    </div>
  )
}

export default ItemList