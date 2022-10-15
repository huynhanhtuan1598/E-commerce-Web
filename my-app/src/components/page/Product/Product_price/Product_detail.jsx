import React from "react";
import "../Product_price/style.css";
import shop from "../../../img/shop.webp";
import icon_shop from "../../../img/icon.png";
import icon_add from "../../../img/icon_add.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Product_detail() {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const handleIncrease = (flag) => {
    if (flag) {
      setCounter(counter + 1);
    } else if (flag <= 1) {
      setCounter(counter - 1);
    } else {
      setCounter(counter - 1);
    }

    return handleIncrease;
  };

  const add_cart = () => {
    const item = {
      id: counter,
      name: "Product",
      description: "Product Description",
      price: 200000,
      size: "M",
      amount: counter,
    };

    dispatch({
      type: "ADD_CART",
      payload: { item },
    });
  };

  return (
    <div className="container_detail">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-3">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-4">
                  <img src="http://placekitten.com/400/252" />
                </div>
                <div className="tab-pane" id="pic-5">
                  <img src="http://placekitten.com/400/252" />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-3" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-4" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-5" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="details col-md-6">
              <h3 className="product-title">men's shoes fashion</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  (Xem 34 đánh giá) <span>&#124;</span> Đã bán 95
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">
                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                cubilia sem sem! Repudiandae et! Massa senectus enim minim
                sociosqu delectus posuere.
              </p>
              <div className="price_product">
                <div className="price">180.000₫</div>
                <div className="price_sale">
                  <del>500.000₫</del>
                </div>
                <div className="price_persent">25%</div>
              </div>
              <h5 className="sizes">
                sizes:
                <span className="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span className="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span className="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span className="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5>
              <h5 className="colors">
                colors:
                <span
                  className="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In store"
                ></span>
                <span className="color green"></span>
                <span className="color blue"></span>
              </h5>
              <div className="buttons_added">
                <input
                  className="minus is-form"
                  type="button"
                  value="-"
                  onClick={() => handleIncrease(false)}
                />
                <input
                  aria-label="quantity"
                  className="input-qty"
                  max="10"
                  min="1"
                  name=""
                  type="number"
                  value={counter}
                />
                <input
                  className="plus is-form"
                  type="button"
                  value="+"
                  onClick={() => handleIncrease(true)}
                />
              </div>
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button" onClick={() => add_cart()}>
                  add to cart
                </button>
                <button className="like btn btn-default" type="button">
                  <span>Trả góp</span>{" "}
                </button>
              </div>
            </div>
            <div className="Right">
              <div className="style__StyledCurrentSeller-sc-12p8j3k-0 kOzFUd">
                <div className="style__StyledSellerWidget-sc-kd90zt-0 bTlnnR">
                  <div className="style__StyledSellerWidget-sc-kd90zt-0 bTlnnR">
                    <div className="seller-info">
                      <a className="overview">
                        <img
                          className="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo logo"
                          src={shop}
                        />
                        <div className="overview-right center-item">
                          <span className="seller-name">
                            <span>MEN'S SHOES FASHION</span>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="seller-detail">
                    <div className="item review">
                      <div className="title">
                        <span>4.7 / 5</span>
                        <span className="fa fa-star checked"></span>
                      </div>
                      <div className="sub-title">21</div>
                    </div>
                    <div className="border-left"></div>
                    <div className="item normal">
                      <div className="title">
                        <span>4</span>
                      </div>
                      <div className="sub-title">Theo dõi</div>
                    </div>
                  </div>
                  <div className="seller-action">
                    <a className="action" href="/Shop_detail">
                      <img src={icon_shop} />
                      <span>Xem Shop </span>
                    </a>
                    <div className="action follow">
                      <img src={icon_add} />
                      <span>Theo Dõi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_detail;