import React from 'react';
import "./product_cate.css";
  import "../../Css/Responsive.css";
import Ip13 from '../../../img/13prmax.webp';
import { Outlet, Link, NavLink } from "react-router-dom";
import List_product from '../../js/List_product';
const Product_cate = () => {
  
    let product = {
      name: 'Iphone13',
      img: 'https://i.imgur.com/5pg71K8.jpeg'
  }
  return (
    <>
    <List_product product_pro = {product} />
    </>
  )
}

export default Product_cate
