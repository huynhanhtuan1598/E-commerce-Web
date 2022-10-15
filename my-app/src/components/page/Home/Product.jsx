import React from "react";
import "../../page/Css/style_product.css";
import IP13 from "../../img/13prmax.webp";

export default function Product() {
  return (
    // <div className="product-suggestions">
    //     <div className="grid wide product_px ">
    //       <div className="highlight-container">
    //         <div className="row ">
    //           {/* <!-- Dành cho bạn --> */}
    //           <div className="product-suggestions-container block-active">
    //             <div className="suggestions-main">
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Ghế đệm mông bơm hơi có tay vịn-Tặng kèm bơm tay và
    //                         quà tặng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         (Hang Cap Cap) Kệ đựng đồ đa năng,3tầng có bánh xe
    //                         việt nhật
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img src={Iphone_13pr} className="product-having-img" />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Điện thoại iPhone 13 Pro Max - Hàng chính hãng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Nồi Chiên Không Dầu Điện Tử Lock&Lock EJF357BLK (5.2
    //                         Lít) - Hàng Chính Hãng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Điện Thoại iPhone 13 128GB - Hàng Chính Hãng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Keo chống thấm dột sử lý vết nứt bong tróc đa năng
    //                         TAIKO JAPAN nhập khẩu - Đen - 1 Kg
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="suggestions-main">
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Ghế đệm mông bơm hơi có tay vịn-Tặng kèm bơm tay và
    //                         quà tặng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         (Hang Cap Cap) Kệ đựng đồ đa năng,3tầng có bánh xe
    //                         việt nhật
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img src={Iphone_13pr} className="product-having-img" />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Điện thoại iPhone 13 Pro Max - Hàng chính hãng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Nồi Chiên Không Dầu Điện Tử Lock&Lock EJF357BLK (5.2
    //                         Lít) - Hàng Chính Hãng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Điện Thoại iPhone 13 128GB - Hàng Chính Hãng
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col l-2 m-6 c-3">
    //                 <div className="product-having">
    //                   <a className="product-having-a" href="">
    //                     <div className="product-having-photo">
    //                       <img
    //                         src={Iphone_13pr}
    //                         alt=""
    //                         className="product-having-img"
    //                       />
    //                     </div>
    //                     <div className="product-having-title">
    //                       <p className="product-having-title-item">
    //                         Keo chống thấm dột sử lý vết nứt bong tróc đa năng
    //                         TAIKO JAPAN nhập khẩu - Đen - 1 Kg
    //                       </p>
    //                       <span className="product-having-price">194.000 ₫</span>
    //                     </div>
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="ProductList__Wrapper-sc-1dl80l2-0 iPafhE">
      <div>
        <a className="product-item">
          <span className="style__StyledItem-sc-18svp8n-0 fkDgwT">
            <div>
              <div className="thumbnail">
                <div class="badge-top"></div>
                <div className="image-wrapper">
                  <picture className="webpimg-container">
                    <img src={IP13} />
                  </picture>
                </div>
              </div>
              <div className="info">
                <div class="name">
                  <h3>
                    Giày Bóng Chuyền, Cầu Lông Nam Nữ Mira 19.1 việt nam Chất
                    Liệu Da Bóng, Đế Kep Cao Su Tự Nhiên Chống Bào Mòn
                  </h3>
                </div>
                <div class="price-discount has-discount">
                  <div class="price-discount__price">
                    377.000<sup> ₫</sup>
                  </div>
                  <div class="price-discount__discount">-10%</div>
                </div>
              </div>
            </div>
          </span>
        </a>
      </div>
      <div>
        <a className="product-item">
          <span className="style__StyledItem-sc-18svp8n-0 fkDgwT">
            <div>
              <div className="thumbnail">
                <div class="badge-top"></div>
                <div className="image-wrapper">
                  <picture className="webpimg-container">
                    <img src={IP13} />
                  </picture>
                </div>
              </div>
              <div className="info">
                <div class="name">
                  <h3>
                    Giày Bóng Chuyền, Cầu Lông Nam Nữ Mira 19.1 việt nam Chất
                    Liệu Da Bóng, Đế Kep Cao Su Tự Nhiên Chống Bào Mòn
                  </h3>
                </div>
                <div class="price-discount has-discount">
                  <div class="price-discount__price">
                    377.000<sup> ₫</sup>
                  </div>
                  <div class="price-discount__discount">-10%</div>
                </div>
              </div>
            </div>
          </span>
        </a>
      </div>
      <div>
        <a className="product-item">
          <span className="style__StyledItem-sc-18svp8n-0 fkDgwT">
            <div>
              <div className="thumbnail">
                <div class="badge-top"></div>
                <div className="image-wrapper">
                  <picture className="webpimg-container">
                    <img src={IP13} />
                  </picture>
                </div>
              </div>
              <div className="info">
                <div class="name">
                  <h3>
                    Giày Bóng Chuyền, Cầu Lông Nam Nữ Mira 19.1 việt nam Chất
                    Liệu Da Bóng, Đế Kep Cao Su Tự Nhiên Chống Bào Mòn
                  </h3>
                </div>
                <div class="price-discount has-discount">
                  <div class="price-discount__price">
                    377.000<sup> ₫</sup>
                  </div>
                  <div class="price-discount__discount">-10%</div>
                </div>
              </div>
            </div>
          </span>
        </a>
      </div>
      <div>
        <a className="product-item">
          <span className="style__StyledItem-sc-18svp8n-0 fkDgwT">
            <div>
              <div className="thumbnail">
                <div class="badge-top"></div>
                <div className="image-wrapper">
                  <picture className="webpimg-container">
                    <img src={IP13} />
                  </picture>
                </div>
              </div>
              <div className="info">
                <div class="name">
                  <h3>
                    Giày Bóng Chuyền, Cầu Lông Nam Nữ Mira 19.1 việt nam Chất
                    Liệu Da Bóng, Đế Kep Cao Su Tự Nhiên Chống Bào Mòn
                  </h3>
                </div>
                <div class="price-discount has-discount">
                  <div class="price-discount__price">
                    377.000<sup> ₫</sup>
                  </div>
                  <div class="price-discount__discount">-10%</div>
                </div>
              </div>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
}
