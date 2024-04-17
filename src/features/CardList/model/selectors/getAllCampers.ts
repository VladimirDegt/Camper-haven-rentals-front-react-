import {RootState} from "@/app/providers/StoreProvider/config/store";

export const selectCampers = (state: RootState) => state.campers.campers;

export const selectFilter = (state : RootState) => state.campers.filter;