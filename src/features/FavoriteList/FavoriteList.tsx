import {useDispatch, useSelector} from 'react-redux';
import { selectFavorites } from '@/features/FavoriteList/module/selectors/getAllFavorite';
import cls from '@/features/CardList/CardList.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import {selectCampers, selectFilter} from "@/features/CardList/model/selectors/getAllCampers";
import axios from "axios";
import {campersActions} from "@/features/CardList/model/slice/camperSlice";

export const FavoriteList = () => {
    const [camper, setCamper] = useState([]);
    const [isLoadingServer, setIsLoadingServer] = useState(false);
    const [visibleCamperCount, setVisibleCamperCount] = useState(4);

    useEffect(() => {
        setIsLoadingServer(true);
        // axios.get('http://localhost:3002/camper/allFavorite')
             axios.get('https://camper-haven-rentals-back.onrender.com/camper/allFavorite')
            .then(response => {
                setCamper(response.data);
            })
            .catch(error => console.log('error', error))
            .finally(() => setIsLoadingServer(false));
    }, []);

    const loadMore = () => setVisibleCamperCount(prevCount => prevCount + 4);

    return (
        <>
            {camper.length === 0 ? (
                <div className={cls.loader}>
                    <h3>Favorite not found</h3>
                </div>
            ) : (
                <section className={cls.container_list}>
                    <ul className={cls.list}>
                        {camper.length > 0 &&
                            camper.slice(0, visibleCamperCount).map((item : any, index: number) => (
                                <li key={index}>
                                    <Card item={item}/>
                                </li>
                            ))
                        }
                    </ul>
                    {camper.length > visibleCamperCount && (
                        <Button theme={ButtonTheme.LOAD_MORE} onClick={loadMore}>
                            Load more
                        </Button>
                    )}

                </section>
            )}
        </>
    );
}