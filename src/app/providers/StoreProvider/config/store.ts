import { configureStore } from '@reduxjs/toolkit';
import {camperSlice} from "@/features/CardList/model/slice/camperSlice";

const rootReducer = {
    campers: camperSlice.reducer,
};
export const store = configureStore({
    reducer: rootReducer,

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

