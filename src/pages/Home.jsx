import React from 'react'
import Slider from '../components/slider/Slider'
import FeaturedProduct from '../components/featuredproduct/FeaturedProduct'
import Category from '../components/catagory/Category'
import Contact from '../components/contact/Contact'


const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProduct type={'Featured'}/>
      <Category/>
      <FeaturedProduct type={'Catagory'}/>
      <Contact/>
    </div>
  )
}

export default Home