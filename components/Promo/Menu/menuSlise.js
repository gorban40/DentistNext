import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showMenu: false
}

const overlaySlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuShow: state => {state.showMenu = true},
        menuHide: state => {state.showMenu = false}
    }
})

const {actions, reducer} = overlaySlice;

export default reducer;

export const {
    menuShow,
    menuHide
} = actions;