import React from 'react';
import Cash from '../../img/Screenshot 2021-11-08 165951 thanh toán.png';
import Ch_play from '../../img/Screenshot 2021-11-08 171932 dowload.png';


export default function Footer() {
  return (
    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h4><b>Hỗ trợ khách hàng</b></h4>
                <ul>
                    <li><a href="#">Hotline: 1900-6035<br/>(1000 đ/phút, 8-21h kể cả T7, CN)</a></li>
                    <li><a href="#">Các câu hỏi thường gặp</a></li>
                    <li><a href="#">Gửi yêu cầu hỗ trợ</a></li>
                    <li><a href="#">Hướng dẫn đặt hàng</a></li>
                 <li><a href="#">Phương thức vận chuyển</a></li>
                    <li><a href="#">Chính sách đổi trả</a></li>
                    <li><a href="#">Hướng dẫn trả góp</a></li>
                    <li><a href="#">Chính sách hàng nhập khẩu</a></li>
                    <li><a href="#">Hỗ trợ khách hàng: hotro@tiki.vn</a></li>
                 <li><a href="#">Báo lỗi bảo mật: security@tiki.vn</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4><b>Về Tiki</b></h4>
                <ul>
                    <li><a href="#">Giới thiệu Tiki</a></li>
                    <li><a href="#">Tuyển dụng</a></li>
                    <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                    <li><a href="#">Chính sach bảo mật thông tin cá nhân</a></li>
                    <li><a href="#">Chính sách giải quyết khiếu nại</a></li>
                 <li><a href="#">Điều khoản sử dụng</a></li>
                 <li><a href="#">Giới thiệu Tiki Xu</a></li>
                 <li><a href="#">SEP-Mua sắm có lời</a></li>
                 <li><a href="#">Tiếp thị liên kết cùng Tiki</a></li>
                 <li><a href="#">Bán hàng doanh nghiệp</a></li>
                 <li><a href="#">Điều kiện vận chuyển</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4><b>Hợp tác và liên kết</b></h4>
                <ul>
                    <li><a href="#">Quy chế hoạt động Sàn GDTMDT</a></li>
                    <li><a href="#">Bán hàng cùng Tiki</a></li>
                </ul>
                <h4><b>Chứng nhận bởi</b></h4>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>

            </div>
            <div className="footer-col">
                <h4><b>Phương thức thanh toán</b></h4>
                <div className="social-links">
                <img className="w-100 h-100" src={Cash} alt="Lataa" />
                    {/* <a href="#">
                    <img className="w-100 h-100" src={Cash} alt="Lataa" />
                    </a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
                </div>
            </div>
            <div className="footer-col">
             <h4><b>kết nối với chúng tôi</b></h4>
             <div className="social-links">
             <img className="w-100 h-100" src={Ch_play} alt="Lataa" />
                 {/* <a href="#">  <img className="w-100 h-100" src={Ch_play} alt="Lataa" /></a>
                 <a href="#"><i className="fab fa-twitter"></i></a>
                 <a href="#"><i className="fab fa-instagram"></i></a>
                 <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
             </div>
         </div>
        </div>
    </div>
</footer>
  )
}

