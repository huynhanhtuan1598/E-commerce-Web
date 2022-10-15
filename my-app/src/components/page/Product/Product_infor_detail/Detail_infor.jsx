import React from "react";
import "./style.css";

const Detail_infor = () => {
  return (
    <>
      <div className="Detail_information">
        <div className="table_information">
          <h3>Thông Tin Chi Tiết</h3>
          <table className="table_inf">
            <tbody>
              <tr>
                <td>Thương hiệu</td>
                <td>Everon Lite</td>
              </tr>
              <tr>
                <td>Xuất xứ thương hiệu</td>
                <td> Hàn Quốc</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>TDELM</td>
              </tr>
              <tr>
                <td>Kích thước (Dài x Rộng x Cao)</td>
                <td> 1.6m x 2m</td>
              </tr>
              <tr>
                <td>Chất liệu</td>
                <td>Microfiber</td>
              </tr>
              <tr>
                <td>Xuất xứ</td>
                <td> Việt Nam</td>
              </tr>
              <tr>
                <td>Trọng lượng sản phẩm</td>
                <td>1.1kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='description'>
        <h3>
        Mô Tả Sản Phẩm
        </h3>
        <p>
        Chăn trần bông Everon Lite, chất liệu vải Microfiber Twill nhập khẩu
        </p>
        <p>
        1/ Đặc tính:
        </p>
        <p>
        - Có tính kháng khuẩn tự nhiên, hạn chế bám bẩn trong quá trình sử dụng.
        </p>
        <p>
        - Chăn hè chần bông sợi Microfiber mềm mại, khả năng thấm hút mồ hôi tốt, tạo sự thông thoáng cho người nằm.    
        </p>
        <p>
        - Chống lại các vết bẩn một cách tự nhiên, không bị biến dạng khi giặt, chống nhăn và chống kéo dãn.
        </p>
        <p>
        - Chất liệu vải bền đẹp, dễ dàng giặt sạch với nước, nhanh khô và ít bám bụi.
        </p>

        <p>
        - Sản phẩm an toàn, không gây kích ứng da khi tiếp xúc, đảm bảo an toàn cho sức khỏe.
        </p>
        <p>
        {/* <p>&nbsp;</p> */}
        2/ Chi tiết sản phẩm chăn hè chần bông:
        </p>
        <p>
        - Cân nặng 1,1Kg
        </p>
        <p>
        - Kích thước đóng gói 34x44x15 cm
        </p>
        <p>
        - Kích thước chăn 1m6x2m
        </p>
        <p>
        {/* <p>&nbsp;</p>  */}
        3/ Cam kết:
        </p>
        <p>- 100% chính hãng từ nhà sản xuất Everon</p>
        <p>- Đổi trả/hoàn tiền miễn phí đối với lỗi sản phẩm phát sinh từ nhà sản xuất</p>
        <p- Bảo hành chính hãng từ nhà sản xuất></p->
      </div>
    </>
  );
};

export default Detail_infor;
