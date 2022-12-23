import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

import img_2 from "../../../public/images/img/promo/promo__slider_2.gif";
import img_3 from "../../../public/images/img/promo/promo__slider_3.gif";

const Slider = () => {
  const data = [{photo: img_2},{photo: img_2},{photo: img_3}];

  const makeList = () => {
    return data.map((item) => {
      return (
        <SwiperSlide>
          <Image
            src={item.photo}
            layout="responsive"
            className="slider__img"
            alt="slide"
          />
        </SwiperSlide>
      );
    });
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      speed={500}
      className={"slider"}
    >
		{makeList()}
    </Swiper>
  );
};

export default Slider;
