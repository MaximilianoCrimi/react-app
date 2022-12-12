import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1"> 
            <Link to={'/'}>
                <a className="btn btn-ghost normal-case text-xl text-orange-500">Dragon Ball Tienda</a>
            </Link>    
            </div>
            <div className= " pr-96">
                <ul className='flex-column'>
                    <Link to={'/category/Saiajin'}>
                        <li className="btn btn-ghost normal-case text-xl "><a>Saiajin</a></li>
                    </Link>
                    <Link to={'/category/Freezer'}>
                        <li className="btn btn-ghost normal-case text-xl "><a>Freezer</a></li>
                    </Link>
                    <Link to={'/category/Cell'}>
                        <li className="btn btn-ghost normal-case text-xl "><a>Cell</a></li>
                    </Link>
                    <Link to={'/category/Majin Boo'}>
                        <li className="btn btn-ghost normal-case text-xl "><a>Majin Boo</a></li>
                    </Link>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar;