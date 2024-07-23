// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import images from "./images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// color purple=#8C52FF #23252E
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Hero() {
  return (
    <div className=" bg-[#23252E] h-max">
      {" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="">
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img className="w-full bg-cover h-full" src={item} alt="images" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Hero;
