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
          <div className="style__StyledSimpleSlider-sc-14im2m5-0 hcRNiQ">
            <span class="icon icon-prev disabled">
              <i class="tikicon icon-arrow-back"></i>
            </span>
            <div
              className="content"
              style={{ transform: !isNext ? "translateX(9px)" : "" }}
            >
              <span class="slider">
                <NavLink strict to="/">
                  <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                    Home
                  </div>
                </NavLink>
                <NavLink strict to="/Category_home">
                  <div class="style__StyledCateName-sc-x9fskq-1 fVbTIP">
                    Product
                  </div>
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
