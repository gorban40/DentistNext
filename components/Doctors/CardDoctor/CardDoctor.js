// import './CardDoctor.scss'
import Image from "next/image";
const CardDoctor = ({ name, img, job, categoria, experience }) => {
    return (
        <>
            <div className="cardDoctor__wrapper">
                <div className="cardDoctor__img"><Image src={img} alt="photo_doctor" /></div>
                <div className="cardDoctor__wrapper_title">
                    <h3 className="cardDoctor__name">{name}</h3>
                    <h3 className="cardDoctor__job">{job}</h3>
                    <h3 className="cardDoctor__categoria">{categoria}</h3>
                </div>
                <div className="cardDoctor__wrapper_experience">
                    <div>стаж</div>
                    <div className="cardDoctor__wrapper_footer">
                        <div className="cardDoctor__age">{experience} року</div>
                        <a href="#diploma">Дипломи</a>
                        <a href="#works">Роботи</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDoctor;