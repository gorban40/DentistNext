import CardStandart from "./CardStandart/CardStandart";
import { Container } from "react-bootstrap";

import sleep__bg from '../../public/images/icons/standart/standart__man_bg.png';
import tool__bg from '../../public/images/icons/standart/standart__tool_bg.png';
import grand__bg from '../../public/images/icons/standart/standart__grand_bg.jpg';
import sheet__bg from '../../public/images/icons/standart/standart__sheet_bg.png';
import mother__bg from '../../public/images/icons/standart/standart__mother_bg.png';
import bg from '../../public/images/icons/standart/standart__grand_bg.jpg';

import sleep__icon from '../../public/images/icons/standart/standart__man_icon.png';
import tool__icon from '../../public/images/icons/standart/standart__tool.png';
import grand__icon from '../../public/images/icons/standart/standart__grand_icon.png';
import sheet__icon from '../../public/images/icons/standart/standart__sheet_icon.png';
import mother__icon from '../../public/images/icons/standart/standart__mother_icon.png';

// import './Standart.scss'

const Standart = () => {
    return (
        <section id="standart" className="standart">
            <Container>
                <h2 className="title">За світовими стандартами</h2>
                <div className="standart__wrapper">
                    <CardStandart title='стежимо за безпекою' descr='дизинфікуємо інструменти за всіма стандартами санпіну' bg={tool__bg} icon={tool__icon}/>
                    <CardStandart title='лікуємо людей похилого віку' descr='спеціальна програма для літніх клієнтів' bg={grand__bg} icon={grand__icon}/>
                    <CardStandart title='відповідаємо за свою роботу' descr='Надаємо гарантію на всі види послуг' bg={sheet__bg} icon={sheet__icon}/>
                    <CardStandart title='лікуємо матерів' descr='безпечно лікуємо матерів' bg={mother__bg} icon={mother__icon}/>
                </div>
            </Container>
        </section>
    )
}

export default Standart;