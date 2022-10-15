
import user_carousel from "../../img/1.png";
import astra from "../../img/astra+.webp";
import mec from "../../img/mec.webp";
import hot_food from "../../img/hot_ngon.webp";
import cash_money from "../../img/dong_tien.webp";
import ASA from "../../img/mua_ban.webp";
import ticked_sale from "../../img/sale_ticket.webp";
import Sale_50 from "../../img/sale_50.webp";
import Cash_money from "../../img/hoan_tien.webp";
import Cacsh_sale from "../../img/thanh_toan.webp";



import React from 'react'

export default function Content() {
  return (
    <div className="content_header">
        <div className="container">
          <div className="row mx-0 jenis-sale">
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={astra} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Thưởng thêm Astra</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={mec} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Trúng <br/>Mercedes</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={hot_food} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Đi chợ siêu tốc</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={cash_money} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Đóng tiền,<br/> nạp thẻ</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={ASA} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Mua bán<br/> ASA/XU</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={ticked_sale} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Mã giảm giá</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={Sale_50} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Bảo Hiểm <br/>Tiki360</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={Cash_money} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Giảm đến 50%</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={user_carousel} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Hoàn tiền <br/>15%</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="wrap-img">
                  <img src={Cacsh_sale} className="jenisk" />
                </div>
                <p className="mb-0 mt-2">Ưu đãi Thanh toán</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

