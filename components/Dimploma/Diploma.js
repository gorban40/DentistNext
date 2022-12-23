import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";

import SliderDocuments from "./SliderPapers/SliderDocuments";
import SliderPartner from "./SliderParther/SliderPartner";

// import './Diploma.scss';

import people from '../../public/images/icons/why_we/why_we_people.png';
import like from '../../public/images/icons/why_we/why_we_like.png';
import sheet from '../../public/images/icons/why_we/why_we_sheet.png';

const Dimploma = () => {



    return (
        <section id="diploma" className="diploma">
            <Container>
                <Row>
                    <Col xxl={3}>
                        <div className="right">
                        <h2 className="title">чому ми?</h2>
                            <Row>
                                <div className="diploma__item">
                                    <Image src={people} alt="icon_people" className="diploma__icon" />
                                    <h4 className="diploma__name">ВІДСУТНІСТЬ ЧЕРГ</h4>
                                    <p className="diploma__descr">Приймаємо всіх пацієнтів у визначений час</p>
                                </div>
                            </Row>
                            <Row>
                                <div className="diploma__item">
                                    <Image src={like} alt="icon_people" className="diploma__icon" />
                                    <h4 className="diploma__name">ВІДПОВІДАЄМО ЗА СВОЮ РОБОТУ</h4>
                                    <p className="diploma__descr">Надаємо гарантію на всі види послуг</p>
                                </div>
                            </Row>
                            <Row>
                                <div className="diploma__item">
                                    <Image src={sheet} alt="icon_people" className="diploma__icon" />
                                    <h4 className="diploma__name">ГАРАНТОВАНА БЕЗПЕКА</h4>
                                    <p className="diploma__descr">Наша клініка суворо дотримується усіх вимог санітарних норм.
                                        У роботі використовуються одноразові
                                        витратні матеріали та 100%
                                        стерильний інструментарій
                                    </p>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col xxl={9}>
                        <h2 className="title">Ліцензії "Назва Компаніі"</h2>
                        <Row className="bottom">
                            <SliderDocuments/>
                        </Row>
                        <Row>
                            <div className="diploma__parther">
                                <h2 className="title">Партнери</h2>
                                <SliderPartner/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Dimploma;