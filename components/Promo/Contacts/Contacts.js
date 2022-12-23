import Btn from '../../Customization/Btn/Btn';
import SocialNetworks from '../../Customization/SocialNetworks/SocialNetworks';

// import "./Contacts.scss";

const Contacts = () => {



    return (
        <div className="contacts">
            <div className="contacts__call">
                <div className="contacts__call__wrapper">
                    <h3>зателефонуйте</h3>
                    <a href="tel:+1123-456-7890" className="contacts__call__number">+ 8 (383) 312 21 18</a>
                </div>
                <Btn text={"замовити дзвінок"} color={'black'}/>
            </div>
            <div className="contacts__social">
                <div className="contacts__social__wrapper">
                    <SocialNetworks/>
                </div>
            </div>
            <div className="contacts__place">
                <h3 className="contacts__place__title">місце розташування</h3>
                <div className="contacts__place__content">
                    <div>вул. Ленина 12</div>
                    <div>8:30 - 21:00</div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;