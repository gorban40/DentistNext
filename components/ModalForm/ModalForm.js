import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// import useWindowDimension from '../hooks/useWindowDimensions';

import CustomForm from '../Wait/Form/Form';

import { modalFormHide } from '../ModalForm/modalFormSlice';
import { overlayHide } from '../Overlay/overlaySlice';

// import './ModalForm.scss';

const ModalForm = () => {

    const dispatch = useDispatch();

    const { showModalForm } = useSelector(state => state.modalForm)

    // const { height } = useWindowDimension();

    return (
        <>
            {
                showModalForm ?
                    <motion.section className='modalForm'

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.8,
                            x: { duration: 1 },
                            default: { ease: "linear" }
                        }}>
                        {
                            // height > 700 ? 
                            <div className="modalForm__wrapper">
                            <div className='modalForm__form'>
                                <button onClick={() => { dispatch(modalFormHide()); dispatch(overlayHide()) }} className='modalForm__form__close'></button>
                                <CustomForm />
                            </div>
                            <div className='modalForm__map'>
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d661.3469460777443!2d35.014389!3d48.468275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac12ac4d41d7a43c!2z0KHQotCe0JzQkNCi0J7Qm9Ce0JPQmNCn0JXQodCa0JjQmSDQmtCQ0JHQmNCd0JXQoiDQp9CfINCo0JzQkNCb0JjQmSDQky7Qki4!5e0!3m2!1suk!2sua!4v1662198582399!5m2!1suk!2sua"
                                    className="modal__map__iframe"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    width={400}
                                    height={600}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                        //     : 
                        // <div className="warning">Будласка! <br></br>Переверніть пристрій<br></br><span>недостатньо висоти пристрою, щоб правильно показати контент</span><br></br><a onClick={() => { dispatch(modalFormHide()); dispatch(overlayHide()) }} href="#form">натисніть сюди, щоб перейти на відправку форми</a></div>
                        }

                    </motion.section> : null
            }
        </>
    )
}

export default ModalForm;