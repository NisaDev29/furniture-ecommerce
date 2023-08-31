import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Announce from '../../Components/Announce/Announce'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import NewProduct from '../../Components/NewProduct/NewProduct'
import Categories from '../../Components/Categories/Categories'
import Sale from '../../Components/Sale/Sale'
const Home = () => {
  return (
   <>
    <Announce/>
    <Navbar/>
    <Hero/>
    <Features/>
    <NewProduct/>
    <Categories/>
    <Sale/>
    <Footer/>
   
   </>
  )
}

export default Home