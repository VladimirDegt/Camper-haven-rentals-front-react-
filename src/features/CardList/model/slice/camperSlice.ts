import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campers: [],
    filter: null,
    favorites: [],
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

        addFavorite: (state, action) => {
            // @ts-ignore
            state.favorites = [...state.favorites, action.payload]
        },

        removeFavorite: (state, action) => {

            // @ts-ignore
            state.favorites = state.favorites.filter(item => item.name !== action.payload.name)
        },

        clearFilter: (state) => {
            state.filter = null
        }
    },
});

export const { actions: campersActions } = camperSlice;
export const { reducer: campersReducer } = camperSlice;