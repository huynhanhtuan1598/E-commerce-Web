import React, { useContext } from 'react';
import {  NavLink } from "react-router-dom";


export default function List_product(props) {
    // const product = useContext(array)
    return (
        <div className="product_suggestions_category">
        <div className="grid wide product">
          <div className="highlight-container">
            <div className="row ">
              {/* <!-- Dành cho bạn --> */}
              <div className="product_suggestions_container block-active_category">
                <div className="suggestions_main_category">
                <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <NavLink  strict to="/Product_detail_page" className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={props.product_pro.img}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                            {props.product_pro.name}
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <NavLink  strict to="/Product_detail_page" className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={props.product_pro.img}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                          {props.product_pro.name}
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <NavLink  strict to="/Product_detail_page" className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={props.product_pro.img}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                          {props.product_pro.name}
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <NavLink  strict to="/Product_detail_page" className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={props.product_pro.img}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                          {props.product_pro.name}
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col l-2 m-6 c-3">
                    <div className="product-having">
                      <NavLink  strict to="/Product_detail_page" className="product-having-a" href="">
                        <div className="product-having-photo">
                          <img
                            src={props.product_pro.img}
                            alt=""
                            className="product-having-img"
                          />
                        </div>
                        <div className="product-having-title">
                          <p className="product-having-title-item">
                          {props.product_pro.name}
                          </p>
                          <span className="product-having-price">194.000 ₫</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
