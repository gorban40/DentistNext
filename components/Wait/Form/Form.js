import emailjs from 'emailjs-com';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import InputMask from 'react-input-mask';
import { useRef, useState } from 'react';

import { Container } from "react-bootstrap";

import { useDispatch } from 'react-redux';

import { politicShow } from '../../Politic/politicSlice';

// import "./Form.scss";

const CustomForm = () => {

    const form = useRef();

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState(false);

    const onClickBtn = (e) => {
        const btn = document.querySelectorAll(".btn__send");
        const btnText = document.querySelectorAll(".btn__send_text");

        btnText.forEach((item) => item.innerHTML = "Thanks");
        btn.forEach((item) => item.classList.add("active"));
        setTimeout(() => {
            btnText.forEach((item) => item.innerHTML = "Залашити заявку");
            btn.forEach((item) => item.classList.remove("active"));
        }, 5000);
    }

    function sendEmail() {
        emailjs.sendForm('service_siq9969', 'template_f7lkloj', form.current, '1H_6aXy6YUnBAIA_C').then(res => {
        }).catch(err => setErrorMessage(true));
    }


    return (
        <div className="frame__form">
            <Container>
                <div className="title">ЗАПОВНІТЬ ФОРМУ<br></br>
                    <span>для запису на прийом</span>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        phone: ''
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .min(2, 'мінімум два символи')
                            .required(`це поле обов'язково`),
                        phone: Yup.string().required(`це поле обов'язково`)
                    })}
                    onSubmit={(values, { resetForm }) => {
                        onClickBtn();
                        sendEmail();
                        resetForm();
                    }}>
                    <Form className="form" ref={form}>

                        <div className="form__wrapper_input">
                            <label className="form__label">Як вас звати</label>
                            <Field
                                className="form__input form__input_name"
                                placeholder="ім'я"
                                name="name"
                                id="name"
                                type="text"
                                required
                            />
                            <ErrorMessage  className="form__error" name="name" component='div' />
                        </div>


                        <div className="form__wrapper_input">
                            <label className="form__label">Номер телефону</label>
                            <Field
                                className="form__input form__input_phone"
                                placeholder="телефон"
                                name="phone"
                                id="phone"
                                type="text"
                                render={({ field, form: { isSubmitting } }) => (
                                    <InputMask  {...field} required className="form__input form__input_phone" type="text" placeholder="+38 (0__)-___-____" mask="+38\ (099)-999-9999" maskChar="_" />
                                )}
                            />
                            <ErrorMessage className="form__error" name="phone" component='div' />
                        </div>

                        <div className="form__wrapper_addres">
                            <h3 className="form__addres">адреса клініки</h3>
                            <div className="button button_black form__btn_decoration">пр-т Пушкіна, 73</div>
                        </div>

                        {
                            errorMessage ? 
                            <div className="form__error">Виникла помилка. Нема зв'язку з сервером<br></br>Попробуте пізніше або зателефонуте, напишіть нам на контакти<br></br> +38 (999)-00-00-00 <br></br>gmail@gmail.com</div> 
                            : 
                            <button className="btn__send">
                                <span className="btn__send_text">Залашити заявку</span>
                                <span className="check-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                    </svg>
                                </span>
                            </button>
                        }

                        <div className="form__politic">
                            Натискаючи на кнопку, ви погоджуєтеся на обробку персональних даних і погоджуєтесь з <a href="#politic" onClick={(e) =>{e.preventDefault();
                                                                                                                                            dispatch(politicShow())}} >політикою конфіденційності</a>.
                        </div>
                    </Form>
                </Formik>
            </Container>
        </div>
    )
}

export default CustomForm