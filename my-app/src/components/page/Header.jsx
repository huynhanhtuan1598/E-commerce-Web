import React from 'react'
import "./Home/style.css"; 
import Head from './Home/Head';
import Carousel from './Home/Carousel';
import Container from './Home/Container';
import Footer from './Home/Footer';
import Navigation from './Home/Navigation';




const Header = () => {
  return (
    <>
    <Head /> 
    <Navigation />
    <Carousel/>
    <Container/>
    <Footer/>  
    </>
  )
}

export default Header
