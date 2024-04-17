import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import {store} from "@/app/providers/StoreProvider/config/store";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}