import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showPrice: false
}

const worrySlice = createSlice({
    name: 'worry',
    initialState,
    reducers: {
        priceShow: state => {state.showPrice = true;},
        priceHide: state => {state.showPrice = false}
    }
});

const {actions, reducer} = worrySlice;

export default reducer;

export const {
    priceShow,
    priceHide
} = actions;
