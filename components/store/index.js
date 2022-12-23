import {configureStore} from '@reduxjs/toolkit';
import overlay from '../Overlay/overlaySlice';
import menu from '../Promo/Menu/menuSlise';
import modalForm from '../ModalForm/modalFormSlice';
import worry from '../Worry/worrySlice';
import politic from '../Politic/politicSlice';


const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {overlay, menu, modalForm,worry,politic},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;