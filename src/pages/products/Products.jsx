import React, { useState } from 'react'
import './Products.scss'

const Products = () => {
    const [selected,setSelected] = useState(0);
    const [count,setCount] = useState(0)
    const images =[
        'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D'
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