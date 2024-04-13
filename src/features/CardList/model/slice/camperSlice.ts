import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campers: [],
    filter: {}
}

export const camperSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
        addCamper: (state, action) => {
            state.campers.push(action.payload)
        },
        addFilter: (state, action) => {
            state.filter = action.payload
        }
    },
});

export const { actions: campersActions } = camperSlice;
export const { reducer: campersReducer } = camperSlice;