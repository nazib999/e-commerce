import { Facebook, Google, LinkedIn, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import './Contact.scss'

const Contact = () => {
  
  return (
    <div className='contact' id='contacts'>
      <div className="left">
        <h2>BE TOUCH WITH US</h2>
      </div>
      <div className="center">
        <input type="email" placeholder='Enter your e-mail'/>
        <button>join us</button>
      </div>
      <div className="right">
        <Facebook />
        <Twitter/>
        <LinkedIn/>
        <Google/>
        <Pinterest/>
      </div>
    </div>
  )
}

export default Contact