import React from "react";
import {Search,Person,FavoriteBorder,ShoppingCart} from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import './Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <Link className="link" to="/product/1">
          Man
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/product/2">
          Woman
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/product/3">
          Children
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/">
          About
        </Link>
      </div>
      <div className="item">
        <Link className="link" to={"/contact"}>
          Contact
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/products/1">
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
