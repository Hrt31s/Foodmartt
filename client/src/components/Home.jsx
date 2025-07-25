import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Blogs from './Blogs'
import Justarrived from './Justarrived'
import Mostpopular from './Mostpopular'
import Form from './Form'
import Newarrived from './Newarrived'
import Category from './Category'
import Hero from './Hero'
import { BrowserRouter as Router } from "react-router-dom";
// import Brands from './Brands'
import PromoBanners from './Promobanner'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      {/* <Brands/> */}
      <Newarrived/>
      <Form/>
      <Justarrived/>
      <PromoBanners/>
      <Mostpopular/>
      <Blogs/>
      <Footer/>
    </div>
  )
}
