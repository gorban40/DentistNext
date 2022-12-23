import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showOverlay: false
}

const overlaySlice = createSlice({
    name: 'overlay',
    initialState,
    reducers: {
        overlayShow: state => {state.showOverlay = true;
                                document.body.style.overflow = 'hidden';
        },
        overlayHide: state => {state.showOverlay = false;
                                document.body.style.overflow = '';
        }
    }
})

const {actions, reducer} = overlaySlice;

export default reducer;

export const {
    overlayShow,
    overlayHide
} = actions;
