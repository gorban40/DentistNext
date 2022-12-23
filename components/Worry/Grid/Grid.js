import useWindowSize from '../../hooks/useWindowDimensions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from '../../Resualt/Accordion/Accordion';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useDispatch} from 'react-redux';
import { useEffect } from 'react';

import {modalFormShow} from '../../ModalForm/modalFormSlice';
import { overlayShow } from '../../Overlay/overlaySlice';

import old from '../../../public/images/icons/serviceMenu/serviceMenu__icon_2.png'
import women from '../../../public/images/icons/serviceMenu/serviceMenu__icon_1.png'
import child from '../../../public/images/icons/serviceMenu/serviceMenu__icon_3.png'



const Grid = () => {

    const size = useWindowSize();


    let condition = size.width >= 1400;

    const dispatch = useDispatch();

    const addRoleToComponent = () => {
        document.body.querySelectorAll('.accordion-content').forEach(div => {
            div.setAttribute("role", "navigation");
        });
    }

    useEffect(() => {
        addRoleToComponent();
    }, [])

    const Component = () => {
        return (
            <>
            {
                condition ? 
                <Row className="justify-content-md-center">
                <Col xxl={4} xl={6} className="column" >
                    <Row>
                        <div className="grid__item">
                            <Image width="100%" height="100%" className='grid__img' src={old} alt="icon of old man" />
                            <div className="grid__list grid__list_bottom">
                                <h4 className="grid__title">Мені більше 50 років</h4>
                                <ul>
                                    <li><button>Записатися на діагностику</button></li>
                                    <li><button>Лікування для літніх</button></li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="grid__item">
                            <Image width="100%" height="100%" className='grid__img' src={women} alt="icon of old man" />
                            <div className="grid__list grid__list_bottom">
                                <h4 className="grid__title">Майбутня мати</h4>
                                <ul>
                                    <li><button>Лікування вагітних</button></li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="grid__item">
                            <Image width="100%" height="100%" className='grid__img' src={child} alt="icon of old man" />
                            <div className="grid__list">
                                <h4 className="grid__title">У дитини болить зуб</h4>
                                <ul>
                                    <li><button>дитячий огляд</button></li>
                                    <li><button>лікування без свердління</button></li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col xxl={4} xl={6} className='grid__wrapper column'>
                    <Row>
                        <div className="grid__list">
                            <h4 className="grid__title">Десни</h4>
                            <ul>
                                <li><button>Кровоточивість ясен</button></li>
                                <li><button>Біль у ділянці ясен</button></li>
                            </ul>
                        </div>
                    </Row>
                    <Row>
                        <div className="grid__list">
                            <h4 className="grid__title">Эстетика</h4>
                            <ul>
                                <li><button>Відбілювання зубів</button></li>
                                <li><button>Відсутній зуб</button></li>
                                <li><button>Відколовся зуб</button></li>
                                <li><button>Неправильний прикус</button></li>
                                <li><button>Жовтий наліт на зубах</button></li>
                                <li><button>Профілактичний огляд</button></li>
                            </ul>
                        </div>
                    </Row>
                </Col>
                <Col xxl={4} xl={12} className='grid__wrapper column'>
                    <Row>
                        <div className="grid__list">
                            <h4 className="grid__title">Гігієна та відбілювання</h4>
                            <ul>
                                <li><button>Наліт на зубах</button></li>
                                <li><button>Запах із рота</button></li>
                                <li><button>Жовтий наліт на зубах</button></li>
                            </ul>
                        </div>
                    </Row>
                    <Row>
                        <div className="grid__list">
                            <h4 className="grid__title">Зуби</h4>
                            <ul>
                                <li><button>Карієс</button></li>
                                <li><button>Гострий зубний біль</button></li>
                                <li><button>Злетіла пломба</button></li>
                                <li><button>Чутливість зубів</button></li>
                                <li><button>Рухливість зуба</button></li>
                                <li><button>Розвалився зуб</button></li>
                            </ul>
                        </div>
                    </Row>
                </Col>
                </Row>
                :
                <Row>
                <Col lg={6} md={6} sm={12}>
                    <Accordion title='Мені більше 50 років'>
                        <ul className='grid__accordion__ul'>
                            <li className='grid__accordion__li'><button>Записатися на діагностику</button></li>
                            <li className='grid__accordion__li'><button>Лікування для літніх</button></li>
                        </ul>
                    </Accordion>
                    <Accordion title='Майбутня мати'>
                        <ul className='grid__accordion__ul'>
                            <li className='grid__accordion__li'><button>Лікування вагітних</button></li>
                        </ul>
                    </Accordion>
                    <Accordion title='Десни'>
                        <ul className='grid__accordion__ul'>
                            <li className='grid__accordion__li'><button>Кровоточивість ясен</button></li>
                            <li className='grid__accordion__li'><button>Біль у ділянці ясен</button></li>
                        </ul>
                    </Accordion>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Accordion title='Эстетика'>
                        <ul className='grid__accordion__ul'>
                            <li className='grid__accordion__li'><button>Відбілювання зубів</button></li>
                            <li className='grid__accordion__li'><button>Відсутній зуб</button></li>
                            <li className='grid__accordion__li'><button>Відколовся зуб</button></li>
                            <li className='grid__accordion__li'><button>Неправильний прикус</button></li>
                            <li className='grid__accordion__li'><button>Жовтий наліт на зубах</button></li>
                            <li className='grid__accordion__li'><button>Профілактичний огляд</button></li>
                        </ul>
                    </Accordion>
                    <Accordion title='Гігієна та відбілювання'>
                        <ul className='grid__accordion__ul'>
                            <li className='grid__accordion__li'><button>Наліт на зубах</button></li>
                            <li className='grid__accordion__li'><button>Запах із рота</button></li>
                            <li className='grid__accordion__li'><button>Жовтий наліт на зубах</button></li>
                        </ul>
                    </Accordion>
                    <Accordion title='Зуби'>
                        <ul className='grid__accordion__ul'>
                            <li className='grid__accordion__li'><button>Карієс</button></li>
                            <li className='grid__accordion__li'><button>Гострий зубний біль</button></li>
                            <li className='grid__accordion__li'><button>Злетіла пломба</button></li>
                            <li className='grid__accordion__li'><button>Чутливість зубів</button></li>
                            <li className='grid__accordion__li'><button>Рухливість зуба</button></li>
                            <li className='grid__accordion__li'><button>Розвалився зуб</button></li>
                        </ul>
                    </Accordion>
                </Col>
                <button onClick={() => {dispatch(overlayShow());
                                        dispatch(modalFormShow())}}  className='grid__accordion__button'>Записатися на діагностику</button>
                </Row>
            }
            </>
        )
    }



    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
            <Container className="grid">
                <Component/>
            </Container>
        </motion.div>
    )
}

export default Grid;