import React, { Component } from 'react';
import "./cate_search.css";
import product_img from "../../../img/sale_nua_thang.webp";
import product_img2 from "../../../img/me_be.webp";
import product_img3 from "../../../img/gufood.webp";

export default class PreviousNextMethods extends Component {
    constructor(props) {
      super(props);
      this.next_slider = this.next.bind(this);
      this.prev_slider = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
        <div className="slider">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-8 m-8 c-12">
                        <div className="slider-container">
                            <div className="slider-directional">
                                <div className="prev_slider">
                                    <i className="fas fa-chevron-left"></i>
                                </div>
                                <div className="next_slider">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                            <div className="slider-container-banner">
                                <a href="" className="slider-container-link">
                                    <img src={product_img} alt="" className="slider-img"/>
                                    <img src={product_img2} alt="" className="slider-img"/>
                                    <img src={product_img3} alt="" className="slider-img"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className='CategoryViewstyle__Right-sc-bhstkd-1 jxmsjJ'>
        //     <div className='inner'>
        //         <div className='search-summary'>
        //         <div className="title"><h1>Thời trang nam </h1></div>
        //         </div>
        //         <div className='category-slide-wrapper'>
        //             <div className='Slider__Root-sc-1cbg3p7-0 iXBoov'>
        //                 <div className='Slider__Wrapper-sc-pmvh7n-0 iTEXsX'>
        //                     <div className='slick-slider slick-initialized' dir='ltr'>
        //                     <a data-role="none" className="slick-arrow slick-prev slick-disabled" style="display: block;"><span className="icon"><i className="tikicon icon-arrow-back"></i></span></a>
        //                     <div className='slick-list'>
        //                         <div className='slick-track'>
        //                             <div className='slick-slide slick-active slick-center slick-current'>
        //                                 <div>
        //                                     <a href="https://tiki.vn/khuyen-mai/super-fashion-day" data-view-index="0" data-view-id="product_list_banner_item" tabindex="-1" className="Slider__SlideItem-sc-1cbg3p7-1 cyPxRV" style="width: 100%; display: inline-block;">
        //                                         <picture className='webpimg-container'>
        //                                         <source type="image/webp" srcset="https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png.webp 1x, https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png.webp 2x"/>
        //                                         <img src="https://salt.tikicdn.com/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png" srcset="https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png 1x, https://salt.tikicdn.com/cache/w1080/ts/banner/1f/3e/7a/0de0ad89cf6b784bb9d0d189ace5978d.png 2x" className="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo" style="width: 861px; height: 286px; object-fit: cover;"/>
        //                                         </picture>
        //                                     </a>
        //                                 </div>

        //                             </div>

        //                         </div>
                                
        //                     </div>    
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>

        //     </div>

        // </div>
        
  );
    }
}