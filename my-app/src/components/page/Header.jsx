import React from 'react'
import "./Home/style.css"; 
import Head from './Home/Head';
import Carousel from './Home/Carousel';
import Category from './Home/Category';
import Container from './Home/Container';
import Footer from './Home/Footer';
import Navigation from './Home/Navigation';
import Content from './Home/Content';
import Product from './Home/Product';



const Header = () => {
  return (
    <>
    <Head /> 
    <Navigation />

    {/* <Content/> */}
    <Carousel/>
    {/* <Category /> */}
    <Container/>
    <Footer/>  
    </>
  )
}

export default Header
