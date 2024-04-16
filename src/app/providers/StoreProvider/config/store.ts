import { configureStore } from "@reduxjs/toolkit";
import { camperSlice } from '@/features/CardList/model/slice/camperSlice';
import { $api } from '@/shared/api/api';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router/dist/lib/context';

export function createReduxStore(
    initialState?: any,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers = {
        campers: camperSlice.reducer,
    }

    return (configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        // щоб не експортувати $api у кожний thunk
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })
        })
    )
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];