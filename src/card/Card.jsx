import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div className='card'>
        <div className="image">
            <span>new collection</span>
            <img src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='main'/>
            <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='second'/>
        </div>
        
        <div className="title">High res camera</div>
        <div className="prices">
            <span>$30</span>
            <span>$20</span>
        </div>
    </div>
  )
}

export default Card