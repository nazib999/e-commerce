import React from 'react'
import {KeyboardArrowDown,Search,Person,FavoriteBorder,ShoppingCart} from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import './Navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <div className="item">
             <KeyboardArrowDown/>
             <span>Flag</span>
            </div>
            <div className="item">
             <KeyboardArrowDown/>
             <span>USD</span>
            </div>
            <div className="item">
             <Link className='link' to='/product/1'>Man</Link>
            </div>
            <div className="item">
            <Link className='link' to='/product/2'>Woman</Link>
             
            </div>
            <div className="item">
            <Link className='link' to='/product/3'>Children</Link>
             
            </div>
        </div>
        <div className="center">
            <div className="logo">LAMADEV</div>
        </div>
        <div className="right">
        <div className="item">
            <Link className='link' to='/'>Homepage</Link>
            </div>
            <div className="item">
            <Link className='link' to='/'>About</Link>
             
            </div>
            <div className="item">
            <Link className='link' to='/'>Contact</Link>
             
            </div>
            <div className="item">
            <Link className='link' to='/products/1'>Stores</Link>
             
            </div>
            <div className="icons">
             <Search/>
             <Person/>
             <FavoriteBorder/>
             <div className="cart">
             <ShoppingCart/>
             <span>0</span>
             </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar