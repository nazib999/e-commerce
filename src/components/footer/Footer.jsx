import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="top">
       <div className="item">
            <h2>Categories</h2>
            <span>Men</span>
            <span>Women</span>
            <span>Shoes</span>
            <span>Accerios</span>
            <span>New Arrivals</span>
        </div>
        <div className="item">
        <h2>Links</h2>
        <span>Faq</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        </div>
        <div className="item">
        <h2>About</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo possimus tempore, ipsum excepturi alias iste est! Vitae quod error voluptatum.
        </div>
        <div className="item">
        <h2>Contact</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque molestiae repudiandae quo saepe assumenda temporibus excepturi soluta sint perspiciatis!
        </div>
       </div>
       <div className="bottom">
        <span className='logo'>LAMADEV</span>
        <span className='copy'>&copy; 2023 all right reserved.</span>
       </div>
    </div>
  )
}

export default Footer