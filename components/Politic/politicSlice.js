import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showPolitic: false
}

const politicSlice = createSlice({
    name: 'politic',
    initialState,
    reducers: {
        politicShow: state => {state.showPolitic = true},
        politicHide: state => {state.showPolitic = false}
    }
})

const {actions, reducer} = politicSlice;

export default reducer;

export const {
    politicShow,
    politicHide
} = actions;