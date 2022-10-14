import React from 'react';
import './Category.css';
import DFWD from "../../Asset/img/4DFWD.png";
import Court from "../../Asset/img/Court_Platform.png";
import DFD from "../../Asset/img/4D_Future.png";
import Ultra from "../../Asset/img/Ultraboot22.png";


export default function Category() {
    return (
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card product_item">
                        <div class="body">
                            <div class="cp_img">
                                <img src={DFWD} alt="Product" class="img-fluid" />
                                <div class="hover">
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-plus"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-shopping-cart"></i></a>
                                </div>
                            </div>
                            <div class="product_details">
                                <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                                <ul class="product_price list-unstyled">
                                    <li class="old_price">$16.00</li>
                                    <li class="new_price">$13.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card product_item">
                        <div class="body">
                            <div class="cp_img">
                                <img src={Court} alt="Product" class="img-fluid" />
                                <div class="hover">
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-plus"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-shopping-cart"></i></a>
                                </div>
                            </div>
                            <div class="product_details">
                                <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                                <ul class="product_price list-unstyled">
                                    <li class="old_price">$16.00</li>
                                    <li class="new_price">$13.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card product_item">
                        <div class="body">
                            <div class="cp_img">
                                <img src={DFD} alt="Product" class="img-fluid" />
                                <div class="hover">
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-plus"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-shopping-cart"></i></a>
                                </div>
                            </div>
                            <div class="product_details">
                                <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                                <ul class="product_price list-unstyled">
                                    <li class="old_price">$16.00</li>
                                    <li class="new_price">$13.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div class="card product_item">
                        <div class="body">
                            <div class="cp_img">
                                <img src={Ultra} alt="Product" class="img-fluid" />
                                <div class="hover">
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-plus"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect"><i class="zmdi zmdi-shopping-cart"></i></a>
                                </div>
                            </div>
                            <div class="product_details">
                                <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                                <ul class="product_price list-unstyled">
                                    <li class="old_price">$16.00</li>
                                    <li class="new_price">$13.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
