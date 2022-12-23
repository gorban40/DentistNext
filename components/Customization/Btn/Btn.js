import { useDispatch} from 'react-redux';

import {modalFormShow} from '../../ModalForm/modalFormSlice';
import { overlayShow } from '../../Overlay/overlaySlice';

// import './Btn.scss';

const Btn = ({ text, color }) => {

    const dispatch = useDispatch();

    return (
        <div className='btn-container'>
            <button onClick={() => {
                dispatch(modalFormShow());
                dispatch(overlayShow());
            }} className="cta">
                <span>{text}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </div>
    )
}

export default Btn;