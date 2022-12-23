import {useDispatch, useSelector} from 'react-redux'
import classNames from 'classnames';
import Btn from '../../Customization/Btn/Btn'

// import './Menu.scss';

import logo from '../../../icons/logo/logo.png'

import { overlayHide, overlayShow } from '../../Overlay/overlaySlice';
import { menuHide } from './menuSlise';
import {modalFormShow} from '../../ModalForm/modalFormSlice';

const Menu = () => {

    const dispatch = useDispatch();
    const {showMenu} = useSelector(state => state.menu);

    const menuActiveClass = classNames('menu', {'menu_active': showMenu});

    return (
        <nav>
            <ul className={menuActiveClass}>
                <li className="menu__item" onClick={() => {dispatch(modalFormShow());
                                                                   dispatch(menuHide());
                                                                   dispatch(overlayShow());
                }}><Btn color={'standart'} text={'залишити заявку'}/></li>
                <li onClick={() => {dispatch(overlayHide());
                                    dispatch(menuHide())}} className="menu__item"><a href="#standart">пацієнтам</a></li>
                <li onClick={() => {dispatch(overlayHide());
                                    dispatch(menuHide())}} className="menu__item"><a href="#diploma">ПРО КЛІНІКИ</a></li>
                <li onClick={() => {dispatch(overlayHide());
                                    dispatch(menuHide())}} className="menu__item"><a href="#promo">послуги</a></li>
                <li onClick={() => {dispatch(overlayHide());
                                    dispatch(menuHide())}} className="menu__item"><a href="#works">наші роботи</a></li>
                <li onClick={() => {dispatch(overlayHide());
                                    dispatch(menuHide())}} className="menu__item"><a href="#price">ціни</a></li>
                <li onClick={() => {dispatch(overlayHide());
                                    dispatch(menuHide())}} style={{alignSelf: 'center'}} className="menu__item"><img className="menu__logo" src={logo} alt="logo"/></li>
            </ul>
        </nav>
    )
}

export default Menu;