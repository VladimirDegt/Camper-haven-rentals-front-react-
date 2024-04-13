import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campers: []
}

export const camperSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
        addCamper: (state, action) => {
            state.campers.push(action.payload)
        }
    },
});

export const { actions: campersActions } = camperSlice;
export const { reducer: campersReducer } = camperSlice;