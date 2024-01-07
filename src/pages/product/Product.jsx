import React, { useState } from 'react'
import Card from '../../card/Card';
import './Product.scss'

const Product = () => {
    const [max,setMax] = useState(100);
  return (
    <div className='product'>
        <div className="left">
        <div className="filterItem">
            <h2>Product catagories</h2>
            <div className="inputItem">
                <input type="checkbox" id='1'/>
                <label htmlFor="1">Shirts</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='2'/>
                <label htmlFor="2">Pants</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='3'/>
                <label htmlFor="3">Skarts</label>
            </div>
        </div>
        <div className="filterItem">
            <h2>Filter by Price</h2>
            <span>0</span>
            <input type='range' max={1000} min={0} onChange={(e)=>setMax(e.target.value)} value={max}/>
            <span>{max}</span>
        </div>
        <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
                <input type="radio" id='asc' value='asc' name='price' />
                <label htmlFor="asc">Price (lowest first)</label>
            </div>
            <div className="inputItem">
                <input type="radio" id='desc' value='desc' name='price' />
                <label htmlFor="desc">Price (Highest first)</label>
            </div>
        </div>
        </div>
        <div className="right">
         <div className="banner">
            <img src="https://images.pexels.com/photos/168438/pexels-photo-168438.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            
         </div>
         <div className="all">
         <Card/>
            <Card/>
            <Card/>
            <Card/>
         </div>
        </div>
    </div>
  )
}

export default Product