import React, { Fragment } from 'react';
import './Style.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import Carousel_slide from '../../Component/Carousel/Carousel';
import Category from '../../Component/Category/Category';
import Product from '../../Component/Product/Product';



export default function Home_Page() {
  return (
    <Fragment>
        <Header/>
        <Carousel_slide/>
        <Category/>
        <Footer/>
    </Fragment>
  )
}
