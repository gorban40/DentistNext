import { SwiperSlide, Swiper } from 'swiper/react';
import Image from 'next/image';
// import PrismaZoom from 'react-prismazoom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import diplom from '../../../public/images/icons/why_we/why_we_photo.png'
import { useEffect } from 'react';

// import './SliderDocuments.scss'

const SliderDocuments = () => {

  const data = [{
    photo: diplom,
    alt: 'diplom'
  },{
    photo: diplom,
    alt: 'diplom'
  },{
    photo: diplom,
    alt: 'diplom'
  },{
    photo: diplom,
    alt: 'diplom'
  },{
    photo: diplom,
    alt: 'diplom'
  }]


  const makeList = () => {
    return data.map((item) => {
      return (
        <SwiperSlide>
            <Image src={item.photo} alt={item.alt} />
        </SwiperSlide>
      )
    })
  }

  return (
    <div className="sliderDocuments">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
      >
        {makeList()}
      </Swiper>
    </div>
  )
}

export default SliderDocuments;