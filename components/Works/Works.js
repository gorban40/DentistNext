import { Container } from "react-bootstrap";
import CardWork from "./CardWork/CardWork";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import before from '../../public/images/icons/work/work__before.png'
import after from '../../public/images/icons/work/work__after.png'

// import './Works.scss'

const Works = () => {

    const data = [
    {
        title: 'ТЕРАПЕВТИЧНІ ВІНІРИ',
        before: before,
        after: after,
        name: 'Ганна Вікторівна СВЯТОБОГОВА',
        job: 'Стоматолог-терапевт на Леніна 12'
    },
    {
        title: 'ТЕРАПЕВТИЧНІ ВІНІРИ',
        before: before,
        after: after,
        name: 'Ганна Вікторівна СВЯТОБОГОВА',
        job: 'Стоматолог-терапевт на Леніна 12'
    },
    {
        title: 'ТЕРАПЕВТИЧНІ ВІНІРИ',
        before: before,
        after: after,
        name: 'Ганна Вікторівна СВЯТОБОГОВА',
        job: 'Стоматолог-терапевт на Леніна 12'
    },
    {
        title: 'ТЕРАПЕВТИЧНІ ВІНІРИ',
        before: before,
        after: after,
        name: 'Ганна Вікторівна СВЯТОБОГОВА',
        job: 'Стоматолог-терапевт на Леніна 12'
    }]
    
    function makeCards() {
        return data.map((item, i) => {
            return (
                <SwiperSlide>
                    <CardWork  title={item.title} before={item.before} after={item.after} name={item.name} job={item.job}/>
                </SwiperSlide>
            )
        })
    }
    return (
        <section id="works" className="works">
            <Container>
                <div className="works__wrapper_header">
                    <h2 className="title">Роботи</h2>
                </div>
                <div className="works__wrapper">
                    <Swiper
                          modules={[Navigation]}
                          spaceBetween={20}
                          allowTouchMove={false}
                          slidesPerView={3}
                          navigation
                          loop={true}
                          speed={1000}
                          breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            767: {
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            1400: {
                                slidesPerView: 3
                            }
                          }}
                        >
                        {makeCards()}
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Works;
