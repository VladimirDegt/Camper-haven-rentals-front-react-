import {memo, ReactElement} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./MainLayout.module.scss"

interface MainLayoutProps {
    className?: string;
    content: ReactElement;
    sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        content,
        sidebar,
    } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
        </div>
    )
})