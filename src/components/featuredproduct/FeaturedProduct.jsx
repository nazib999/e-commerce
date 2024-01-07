import React from 'react'
import './FeaturedProduct.scss'
import Card from '../../card/Card'

const FeaturedProduct = ({type}) => {
  return (
    <div className='fproduct'>
        <div className="top">
            <h2>{type} Product</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officia velit impedit laboriosam porro tenetur magnam placeat veritatis ad ea alias, id reiciendis voluptate fugit voluptatibus eaque laborum vero quaerat?</p>
        </div>
        <div className="bottom">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default FeaturedProduct