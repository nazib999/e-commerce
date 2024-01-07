import React, { useState } from 'react'
import './Products.scss'

const Products = () => {
    const [selected,setSelected] = useState(0);
    const [count,setCount] = useState(0)
    const images =[
        'https://images.pexels.com/photos/19558102/pexels-photo-19558102/free-photo-of-girl-holding-a-basket-posing-in-front-of-a-newspaper-kiosk.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/19558088/pexels-photo-19558088/free-photo-of-girl-holding-a-plant-posing-in-front-of-a-newspaper-kiosk.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  return (
    <div className='products'>
        <div className="left">
            <div className="images">
                <img src={images[0]} alt="" onClick={()=>setSelected(0)}/>
                <img src={images[1]} alt="" onClick={()=>setSelected(1)}/>
            </div>
            <div className="main">
                <img src={images[selected]} alt="" />
            </div>
        </div>
        <div className="right">
            <h2>Long Sleev T-shirt</h2>
            <h4>$20.5</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt nihil quam commodi, iste vel esse cum earum neque officiis.</p>
            <div className="item">
                <button onClick={()=>setCount((p)=>p-1)} disabled={count===0}>-</button>
                <span>{count}</span>
                <button onClick={()=>setCount((p)=>p+1)} disabled={count===100}>+</button>
            </div>
            <button className='cart'>Add to Cart</button>

        </div>
    </div>
  )
}

export default Products