import {useDispatch, useSelector} from 'react-redux';
import { motion } from 'framer-motion';

// import './Overlay.scss';

import {overlayHide} from '../Overlay/overlaySlice';
import { menuHide } from '../Promo/Menu/menuSlise';
import { modalFormHide } from '../ModalForm/modalFormSlice';

const Overlay = () => {

    const dispatch = useDispatch()


    const {showOverlay} = useSelector(state => state.overlay); 


    return (
        showOverlay ? <motion.div onClick={() =>{
            dispatch(overlayHide());
            dispatch(menuHide());
            dispatch(modalFormHide());
        }} className="overlay"
                        
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{default: { ease: "linear" }}}            
        ></motion.div> : null
    )
}

export default Overlay;