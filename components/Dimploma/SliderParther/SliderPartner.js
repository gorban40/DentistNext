import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import partner from '../../../public/images/icons/why_we/why_we_partner.png'

const SliderPartner = () => {

    const data = [{
        photo: partner,
        alt: 'partner'
      },{
        photo: partner,
        alt: 'partner'
      },{
        photo: partner,
        alt: 'partner'
      },{
        photo: partner,
        alt: 'partner'
      },{
        photo: partner,
        alt: 'partner'
      },{
        photo: partner,
        alt: 'partner'
      },]
    
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
        <div className="sliderPartner">
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                loop={true}
                >
                {makeList()}
            </Swiper>
        </div>
    )
}

export default SliderPartner;