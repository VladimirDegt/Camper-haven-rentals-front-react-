import {Suspense, useEffect} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Sidebar} from "@/widgets/Sidebar";
import AppRouter from "./providers/router";
import {useTheme} from "./providers/ThemeProvider";
import {LOCAL_STORAGE_THEME_KEY} from "@/app/providers/ThemeProvider/lib/ThemeContext";
import {MainLayout} from "@/shared/layouts/MainLayout";
import 'react-toastify/dist/ReactToastify.min.css';

document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'app_light_theme';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div id="app" className={classNames("app_redesigned", {}, [theme])}>
            <Suspense fallback="">
                <MainLayout
                    content={<AppRouter/>}
                    sidebar={<Sidebar/>}
                />
            </Suspense>
        </div>
    );
};
