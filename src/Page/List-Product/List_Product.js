import React, { Fragment } from 'react'
import Header from '../../Component/Header/Header'
import Product from '../../Component/Product/Product'
import Footer from '../../Component/Footer/Footer';
import Breadcrumbs from '../../Component/Breadcrumbs/breadcrumbs';



export default function List_Product() {
  return (
    <Fragment>
        <Header/>
        <Breadcrumbs/>
        <Product/>
        <Footer/>
    </Fragment>
  )
}
