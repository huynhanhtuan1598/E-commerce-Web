import React from "react";
import logo from "../../asset/image/Dog_Pull.jpg";
import searchs from "../../img/search.png";
import user from "../../asset/image/favpng_font-awesome-user-font.png";
import cart from "../../asset/image/favpng_shopping-cart-shopping-centre-icon.png";

import { useSelector } from 'react-redux';


export default function Head() {
  const carts = useSelector(state => state.cart.carts)
  return (
    <header className="style__Header-sc-q53692-0 ebTvCC">
      <div className="Container-sc-itwfbd-0 hfMLFx">
        <div className="Middle__Wrap-sc-vop1h1-0 edlkEo">
          <div className="Middle__LeftContainer-sc-vop1h1-1 hBRVdJ">
            <div className="logo-menu">
              <div className="style__Logo-sc-3sdkaq-0 cWrfyT">
                <a
                  href="/"
                  data-view-id="header_main_logo"
                  className="tiki-logo"
                >
                  <img src={logo} alt="tiki-logo" />
                </a>
              </div>
            </div>
            <div className="FormSearch__Root-sc-1fwg3wo-0 fPLoMu">
              <div className="FormSearch__Form-sc-1fwg3wo-1 dPyAZH">
                <input
                  type="text"
                  data-view-id="main_search_form_input"
                  value=""
                  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                  className="FormSearch__Input-sc-1fwg3wo-2 gBxvSE"
                  // onChange={() => {
                  //   dispatch({
                  //     type: "ADD_HOBBY",
                  //   });
                  // }}
                />
                <button
                  data-view-id="main_search_form_button"
                  className="FormSearch__Button-sc-1fwg3wo-3 bUpWwh"
                >
                  <img
                    className="icon-search"
                    src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                  />
                  Tìm Kiếm
                </button>
              </div>
            </div>
          </div>
          <div className="Userstyle__Root-sc-6e6am-0 lhUPfd">
            <div className="Userstyle__Item-sc-6e6am-1 cHRIKv">
              <img
                className="profile-icon"
                src={user}
              />
              <span className="Userstyle__ItemText-sc-6e6am-3 kYZPng">
                <span className="Userstyle__NoWrap-sc-6e6am-12 gJAiTt">
                  Đăng Nhập / Đăng Ký
                </span>
                <span className="account-label">
                  <span>Tài khoản</span>
                  <img
                    className="arrowIcon"
                    src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                  />
                </span>
              </span>
            </div>
            <div className="Userstyle__CartItem-sc-6e6am-14 hfiWvr">
              <a
                href="#"
                rel="nofollow"
                data-view-id="header_user_shortcut_cart"
              >
                <div className="Userstyle__Item-sc-6e6am-1 Userstyle__CartItemInner-sc-6e6am-2 cHRIKv cucUum">
                  <div className="cart-wrapper">
                    <img
                      className="cart-icon"
                      src={cart}
                    />
                    <span className="Userstyle__ItemCartQty-sc-6e6am-5 ohfHv">
                      {carts?.length}
                    </span>
                  </div>
                  <span className="cart-text">Giỏ Hàng</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="Bottom__Root-sc-azeq0g-0 fnCMyp">
          <div className="Container-sc-itwfbd-0 hfMLFx">
            <div className="style__StyledHeaderKeyWords-sc-1tmiyrh-0 hgsBUf">
              <a data-view-id="header_quicklinks_item" data-view-index="0">
                trái cây
              </a>
              <a data-view-id="header_quicklinks_item" data-view-index="1">
                thịt, trứng
              </a>
              <a data-view-id="header_quicklinks_item" data-view-index="2">
                rau củ quả
              </a>
              <a data-view-id="header_quicklinks_item" data-view-index="3">
                sửa, bơ, phô mai{" "}
              </a>
              <a data-view-id="header_quicklinks_item" data-view-index="4">
                hải sản{" "}
              </a>
              <a data-view-id="header_quicklinks_item" data-view-index="5">
                gạo, mì ăn liền
              </a>
              <a data-view-id="header_quicklinks_item" data-view-index="6">
                đồ uống, bia rượu
              </a>
              <a data-view-id="header_quicklinks_item" data-view-index="7">
                bánh kẹo
              </a>
            </div>
          </div>
        </div> */}
    </header>
  );
}
