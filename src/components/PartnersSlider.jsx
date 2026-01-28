import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../App.css";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img10 from "../assets/10.png";
import img9 from "../assets/9.png";
import img8 from "../assets/8.png";
import img7 from "../assets/7.png";
import img6 from "../assets/6.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";
import img18 from "../assets/18.png";

const PartnersSlider = () => {
  return (
    <div className="container-fluid my-5">
      {/* عنوان السلايدر */}
      <div className="container">
        <div className="title-slider text-center mb-4">
          <h5 className="card-title">Trusted Partners</h5>
        </div>
      </div>

      {/* السلايدر */}
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          className="controller"
        >
          <SwiperSlide><img src={img1} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img2} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img3} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img11} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img12} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img13} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img10} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img9} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img8} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img7} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img6} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img15} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img16} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img17} className="partner-logo" /></SwiperSlide>
          <SwiperSlide><img src={img18} className="partner-logo" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PartnersSlider;
