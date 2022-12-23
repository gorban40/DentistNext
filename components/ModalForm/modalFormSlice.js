import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showModalForm: false
}

const modalFormslice = createSlice({
    name: 'modalForm',
    initialState,
    reducers: {
        modalFormShow: state => {state.showModalForm = true},
        modalFormHide: state => {state.showModalForm = false}
    }
})

const {actions, reducer} = modalFormslice;

export default reducer;

export const {
    modalFormShow,
    modalFormHide
} = actions;