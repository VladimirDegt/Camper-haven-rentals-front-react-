import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import {useNavigate} from 'react-router-dom';
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
        const navigate = useNavigate();
    return (
        <main className={classNames(cls.NotFoundPage, {}, [className])}>
            <h3>Page not found</h3>
            <Button theme={ButtonTheme.SEARCH} onClick={() => navigate('/')}>Home</Button>
        </main>
    );
}