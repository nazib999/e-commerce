import React from "react";
import {Search,Person,FavoriteBorder,ShoppingCart} from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import './Menu.scss'

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className="menu">
      <div className="item">
        <Link className="link" to="/product/1" onClick={()=>setMenuOpen(!menuOpen)}>
          Man
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/product/2" onClick={()=>setMenuOpen(!menuOpen)}>
          Woman
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/product/3" onClick={()=>setMenuOpen(!menuOpen)}>
          Children
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/" onClick={()=>setMenuOpen(!menuOpen)}>
          About
        </Link>
      </div>
      <div className="item">
        <Link className="link" to={"/contact"} onClick={()=>setMenuOpen(!menuOpen)}>
          Contact
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/products/1" onClick={()=>setMenuOpen(!menuOpen)}>
          Stores
        </Link>
      </div>
      <div className="icons">
        <Search />
        <Person />
        <FavoriteBorder />
        <div className="cart">
          <ShoppingCart />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
