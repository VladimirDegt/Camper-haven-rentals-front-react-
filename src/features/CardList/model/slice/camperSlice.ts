import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campers: [],
    filter: null,
}

export const camperSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
        addCamper: (state, action) => {
            state.campers = action.payload
        },
        addFilter: (state, action) => {
            state.filter = action.payload
        },

        updateCamperFavorite: (state, action) => {
            state.campers = action.payload
        },

        clearFilter: (state) => {
            state.filter = null
        }
    },
});

export const { actions: campersActions } = camperSlice;
export const { reducer: campersReducer } = camperSlice;