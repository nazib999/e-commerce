import React, { useState } from 'react'
import './Slider.scss'
import { EastOutlined, WestOutlined } from '@mui/icons-material'

const data=[
    "https://img.freepik.com/premium-photo/young-business-woman-working-online-ecommerce-shopping-her-shop-young-woman-seller-prepare-parcel-box-product-deliver-customer-online-selling-ecommerc_35691-13024.jpg?size=626&ext=jpg&ga=GA1.1.443864448.1703073303&semt=sph",
    "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww"
]
const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(0);

    const preSlide=()=>{
        setCurrentSlide(currentSlide===0?2:((pre)=>pre-1))
    }
    const nxtSlide=()=>{
        setCurrentSlide(currentSlide===2?0:((pre)=>pre+1))
    }
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <WestOutlined  className='icon' onClick={preSlide}/>
            <EastOutlined className='icon' onClick={nxtSlide}/>
        </div>
     
    </div>
  )
}

export default Slider