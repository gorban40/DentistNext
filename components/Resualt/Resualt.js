import { Container } from "react-bootstrap";
import Accordion from "./Accordion/Accordion";

import bg from '../../img/footer/footer__women.png'

// import './Resualt.scss'

const Resualt = () => {
    return (
        <section className="resualt">
            <Container>
                <h2 className="title">Результат праці</h2>
                <h3 className="resualt__descr">Результат нашої роботи складається з <br></br> кількох важливих складових:</h3>
                <div className="resualt__wrapper">
                    <div >
                    </div>
                    <div className="resualt__wrapper_btn">
                        <div className="resualt__accordion resualt__accordion_w100">
                            <Accordion title="Оснащення клініки сучасним імпортним обладнанням"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed voluptatum at obcaecati architecto cum temporibus quisquam omnis, voluptates molestiae nobis repellat. Exercitationem deleniti quo ratione voluptas, aut quae facere?</p></Accordion>
                        </div>
                        <div className="resualt__accordion ">
                            <Accordion title="Першокласний сервіс"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed voluptatum at obcaecati architecto cum temporibus quisquam omnis, voluptates molestiae nobis repellat. Exercitationem deleniti quo ratione voluptas, aut quae facere?</p></Accordion>
                        </div>
                        <div className="resualt__accordion resualt__accordion_w53">
                            <Accordion title="Точність діагностики"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed voluptatum at obcaecati architecto cum temporibus quisquam omnis, voluptates molestiae nobis repellat. Exercitationem deleniti quo ratione voluptas, aut quae facere?</p></Accordion>
                        </div>
                        <div className="resualt__accordion resualt__accordion_w25">
                            <Accordion title="Безпека"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed voluptatum at </p></Accordion>
                        </div>
                        <div className="resualt__accordion resualt__accordion_w70">
                            <Accordion title="Фахівці з багаторічним досвідом"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed voluptatum at obcaecati architecto cum temporibus quisquam omnis, voluptates molestiae nobis repellat. Exercitationem deleniti quo ratione voluptas, aut quae facere?</p></Accordion>
                        </div>
                    </div>
                </div>
                <img className="resualt__img" src={bg} alt="background__picture" />
            </Container>
        </section>
    )
}

export default Resualt;