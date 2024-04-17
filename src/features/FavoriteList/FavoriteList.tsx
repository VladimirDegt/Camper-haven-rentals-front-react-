import cls from '@/features/CardList/CardList.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import axios from "axios";

export const FavoriteList = () => {
    const [camper, setCamper] = useState([]);
    const [visibleCamperCount, setVisibleCamperCount] = useState(4);

    useEffect(() => {
             axios.get(`${__API__}/camper/allFavorite`)
            .then(response => {
                setCamper(response.data);
            })
            .catch(error => console.log('error', error))
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