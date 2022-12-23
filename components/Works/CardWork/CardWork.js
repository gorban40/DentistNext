import { Carousel } from "react-bootstrap";
import Image from "next/image";
// import './CardWork.scss'


const CardWork = ({title, before, after, name, job}) => {
    return (
        <div className="cardWork">
            <div className="cardWork__wrapper_top">
                <div className="cardWork__after">до</div>
                <div className="cardWork__before">після</div>
            </div>
            <Carousel touch={true} controls={false} className="cardWork__item">
                <Carousel.Item>
                    <Image className="cardWork__img" src={before} alt="work__before" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="cardWork__img" src={after} alt="work__after" />
                </Carousel.Item>
            </Carousel>
            <div className="cardWork__wrapper">
                <div className="cardWork__title">{title}</div>
                <div className="cardWork__name"><span>Майстер</span> {name}</div>
                <div className="cardWork__job">{job}</div>
            </div>
        </div>
    )
}

export default CardWork;