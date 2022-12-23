import SocialNewtworks from '../Customization/SocialNetworks/SocialNetworks';
import Image from 'next/image';

import logo from '../../public/images/icons/logo/logo.png';
import phone from '../../public/images/icons/footer/footer__phone.png';
import email from '../../public/images/icons/footer/footer__email.png';

// import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__up">
                    <div className="footer__logo">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className="footer__info">
                        <div className="footer__block">
                            <div className="footer__subtitle">Години роботи</div>
                            <div className="footer__wrapper_links">
                                <div className="footer__link">Будні: <span>20:20-20:20</span></div>
                                <div className="footer__link">Субота, Неділя: <span>20:20-20:20</span></div>
                            </div>
                        </div>
                        <div className="footer__block">
                            <div className="footer__subtitle">Адреса</div>
                            <div className="footer__wrapper_links">
                                <div className="footer__link">проспект Пушкіна, 73, Дніпро<br></br> Дніпропетровська область, 49000</div>
                            </div>
                        </div>
                        <div className="footer__block">
                            <div className="footer__subtitle">Контакти</div>
                            <div className="footer__wrapper_links">
                                <div className="footer__link"><Image src={phone} alt="icon of phone" /><a href="tel:+1123-456-7890" >+ 8 (383) 312 21 18</a></div>
                                <div className="footer__link"><Image src={email} alt="icon of email" /> Info@example.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__down">
                    <div className="footer__reserved">
                        ©2022  All right reserved.
                    </div>
                    <div className="footer__social">
                        <SocialNewtworks/>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;