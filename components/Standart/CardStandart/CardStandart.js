// import './CardStandart.scss';
import Image from "next/image";

const CardStandart = ({title, descr, bg, icon}) => {

    let className = {background: `url(${bg.src}) center center/cover no-repeat`};

    return (
        <div className="cardStandart">
            <div style={className} className='cardStandart__wrapper_photo'>
                <Image className="cardStandart__icon" src={icon} alt="photo__perosn" />
            </div>
            <div className="cardStandart__wrapper">
                <h3 className="cardStandart__title">{title}</h3>
                <p className="cardStandart__descr">{descr}</p>
            </div>
        </div>
    )    
}

export default CardStandart;