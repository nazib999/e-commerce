import React, { useState } from 'react'
import './Slider.scss'
import { EastOutlined, WestOutlined } from '@mui/icons-material'

const data=[
    "https://images.pexels.com/photos/17454892/pexels-photo-17454892/free-photo-of-objects-in-mirror-are-losing.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9752436/pexels-photo-9752436.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=600"
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