import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-orange-500">Dragon Ball Tienda</a>
            </div>
            <div className= " pr-96">
                <ul className='flex-column'>
                    <li className="btn btn-ghost normal-case text-xl "><a>Saiajin</a></li>
                    <li className="btn btn-ghost normal-case text-xl "><a>Freezer</a></li>
                    <li className="btn btn-ghost normal-case text-xl "><a>Cell</a></li>
                    <li className="btn btn-ghost normal-case text-xl "><a>Majin Boo</a></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar;