import { Container } from "react-bootstrap";
import CustomForm from "./Form/Form";


// import './Wait.scss'



const Wait = () => {
    return (
        <section id="form" className="wait">
            <Container>
                <h2 className="title">Ми чекаємо вас</h2>
                <div className="wait__wrapper">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d540.2892824710428!2d35.01338268620452!3d48.46857733116387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2ffbf4a8abb%3A0x95135d9db71a8c46!2z0L_RgNC-0YHQv9C10LrRgiDQn9GD0YjQutGW0L3QsCwgNzMsINCU0L3RltC_0YDQvsyBLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1suk!2sua!4v1661529828138!5m2!1suk!2sua"
                        className="wait__map"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="wait__form">
                        <CustomForm/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Wait;