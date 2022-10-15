import React from 'react'
import Detail_infor from './Product_infor_detail/Detail_infor';
import Header from '../Home/Head';
import Footer from '../Home/Footer';
import Product_detail from './Product_price/Product_detail';
import Product from './Product_example/Similar_product';
import Product_commnet from './Product_comment/Product_commnet';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Container from '../Home/Container';

export default function Product_detail_page() {
  return (
  <>
      <Header/>
      <Breadcrumb/>
      <Product_detail/>
      <Detail_infor/>
      <Product_commnet/>
      <Container/>
      <Product/>
      <Footer/>
    {/* <Product_detail/> */}
</>
  )
}
