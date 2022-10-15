import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./style.css";
import "../Css/Responsive.css";

export default function Navigation() {
  const [isNext, setIsNext] = useState(true);
  return (
    <div className="style__StyledCategoryTabBarWrapper-sc-x9fskq-0 NNpEP">
      <div className="container">
      <div
             className="col l-12 c-12 m-12"
             style={{
               padding: "0",
               overflow: "hidden",
              //  backgroundColor: "#e1e1e1",
              }}
            >
 <div className="style__StyledSimpleSlider-sc-14im2m5-0 hcRNiQ" >
          <span class="icon icon-prev disabled">
            <i class="tikicon icon-arrow-back"></i>
          </span>
          <div className="content" style={{ transform: !isNext ? "translateX(9px)" : "" }}>
            <span class="slider">
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Thịt, Rau Củ
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Bách Hóa
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Nhà Cửa
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Điện Tử
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Thiết Bị Số
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Điện Thoại
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Mẹ &amp; Bé
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Làm Đẹp
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Gia Dụng
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Thời trang nữ
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Thời trang nam
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Giày nữ
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Túi nữ
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Giày nam
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Túi nam
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Balo &amp; Vali
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Phụ kiện
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Đồng hồ
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Laptop
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Quốc Tế
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Voucher
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">Xe</div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">Sách</div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Thể Thao
                </div>
              </NavLink>
              <NavLink strict to="/Category_home">
                <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                  Máy Ảnh
                </div>
              </NavLink>
            </span>
            <div
                className="prev-navigation"
                style={{ display: isNext ? "none" : "block" }}
                onClick={() => {
                  setIsNext(true);
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </div>
              <div
                className="next-navigation"
                style={{ display: isNext ? "block" : "none" }}
                onClick={() => {
                  setIsNext(false);
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </div>
          </div>
        </div>
            </div>
       
      </div>
    </div>
    // <div className="container_navigation">
    //   <div className="navigation">
    //     <div className="grid wide navigation_header">
    //       <div className="rower">
            // <div
            //   className="col l-12 c-12 m-12"
            //   style={{
            //     padding: "0",
            //     overflow: "hidden",
            //     backgroundColor: "#e1e1e1",
            //   }}
            // >
    //           <div
    //             className="navigation-content"
    //             style={{ transform: !isNext ? "translateX(-941px)" : "" }}
    //           >
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Thịt, rau củ&nbsp;&nbsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Bách Hóa&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Nhà Cửa&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Thiết Bị Số&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Điện Thoại&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p> Mẹ & Bé&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Làm Đẹp&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Gia Dụng&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Thời trang nữ&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Thời trang nam&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Giày nữ&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p> Túi nữ&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Giày nam&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Giày nữ&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Túi nam&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Balo & Vali&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Phụ kiện&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Đồng hồ&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Laptop&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Quốc Tế&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Voucher&nbsp;&nbsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Xe&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Sách&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Thể thao&emsp;</p>
    //             </NavLink>
    //             <NavLink strict to="/Category_home" className="navigation-item">
    //               <p>Máy Ảnh&emsp;</p>
    //             </NavLink>
    //           </div>
              // <div
              //   className="prev-navigation"
              //   style={{ display: isNext ? "none" : "block" }}
              //   onClick={() => {
              //     setIsNext(true);
              //   }}
              // >
              //   <i className="fas fa-chevron-left"></i>
              // </div>
    //           <div
    //             className="next-navigation"
    //             style={{ display: isNext ? "block" : "none" }}
    //             onClick={() => {
    //               setIsNext(false);
    //             }}
    //           >
    //             <i className="fas fa-chevron-right"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
