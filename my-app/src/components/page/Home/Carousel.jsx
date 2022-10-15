import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import img1 from "../../asset/image/4D_Future2.png";
import img2 from "../../asset/image/4DFWD2.png";
import img3 from "../../asset/image/Ultraboot2222.png";

export default function Carousel() {
  return (
    //   <div className="body_Carousel">
    //     <div className="row mx-0 sale">
    //         <div className="row mx-0  row-card">
    //           {/* thoi trang */}
    //           <div className="col-2 h-100 position-relative">
    //             <div className="d-flex align-items-center justify-content-center h-100">
    //               <div className="wrap-img-sale">
    //                 <img className="w-100 h-100" src={LANA} alt="Lataa" />
    //               </div>
    //               <div className="total w-100">
    //                 <div className="text">
    //                   <span>Mua 1 Tang 1</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* sữa */}
    //           <div className="col-2 h-100 position-relative">
    //             <div className="d-flex align-items-center justify-content-center h-100">
    //               <div className="wrap-img-sale">
    //                 <img className="w-100 h-100" src={Nestles} alt="soos 1" />
    //               </div>
    //               <div className="total w-100">
    //                 <div className="text">
    //                   <span>Mua là có quà</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* áo khoacs */}
    //           <div className="col-2 h-100 position-relative">
    //             <div className="d-flex align-items-center justify-content-center h-100">
    //               <div className="wrap-img-sale">
    //                 <img className="w-100 h-100" src={Tshirts} alt="soos 1" />
    //               </div>
    //               <div className="total w-100">
    //                 <div className="text">
    //                   <span>Mua 1 tặng 1</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* Puma */}
    //           <div className="col-2 h-100 position-relative">
    //             <div className="d-flex align-items-center justify-content-center h-100">
    //               <div className="wrap-img-sale">
    //                 <img className="w-100 h-100" src={Pumas} alt="soos 1" />
    //               </div>
    //               <div className="total w-100">
    //                 <div className="text">
    //                   <span>Hot Sale 290k </span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* uno */}
    //           <div className="col-2 h-100 position-relative">
    //             <div className="d-flex align-items-center justify-content-center h-100">
    //               <div className="wrap-img-sale">
    //                 <img className="w-100 h-100" src={Uno} alt="soos 1" />
    //               </div>
    //               <div className="total w-100">
    //                 <div className="text">
    //                   <span>Giảm đến 48%</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* máy chiên ko dầu */}
    //           <div className="col-2 h-100 position-relative">
    //             <div className="d-flex align-items-center justify-content-center h-100">
    //               <div className="wrap-img-sale">
    //                 <img className="w-100 h-100" src={tefat} alt="soos 1" />
    //               </div>
    //               <div className="total w-100">
    //                 <div className="text">
    //                   <span>Mua 1 tặng 1</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //         </div>
    //       </div>
    // </div>return (
    <div className="body_Carousel">
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={img1}
          alt="..."
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={img2}
          alt="..."
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={img3}
          alt="..."
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
