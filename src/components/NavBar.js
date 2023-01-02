import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import CartWidget from './CartWidget'

const NavBar = () => {

    const {totalProductsCart} = useContext(CartContext)

    return (

        <div className="navbar bg-base-100 ">
            <div className="flex-1"> 
            <Link to={'/'}>
                <li className="btn btn-ghost normal-case text-xl text-orange-500">Dragon Ball Tienda</li>
            </Link>    
            </div>
            <div className= " pr-96">
                <ul className='flex-column'>
                    <Link to={'/category/Saiajin'}>
                        <li className="btn btn-ghost normal-case text-xl ">Saiajin</li>
                    </Link>
                    <Link to={'/category/Freezer'}>
                        <li className="btn btn-ghost normal-case text-xl ">Freezer</li>
                    </Link>
                    <Link to={'/category/Cell'}>
                        <li className="btn btn-ghost normal-case text-xl ">Cell</li>
                    </Link>
                    <Link to={'/category/Majin Boo'}>
                        <li className="btn btn-ghost normal-case text-xl ">Majin Boo</li>
                    </Link>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar;