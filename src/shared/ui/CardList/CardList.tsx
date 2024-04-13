import cls from "./CardList.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "@/shared/ui/Loader/ui/Loader";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

export const CardList = () => {
    const [camper, setCamper] = useState([]);
    const [isLoadingServer, setIsLoadingServer] = useState(false);
    const [visibleCamperCount, setVisibleCamperCount] = useState(4);

    useEffect(() => {
        setIsLoadingServer(true);
        axios.get('https://camper-haven-rentals-back.onrender.com/camper/all')
            .then(response => {
                setCamper(response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
            .finally(() => setIsLoadingServer(false));
    }, []);

    const loadMore = () => {
        setVisibleCamperCount(prevCount => prevCount + 4);
    };

    return (
        <>
            {isLoadingServer ? (
                <div className={cls.loader}>
                    <h3>Зачекайте, сервер на render.com прободжується...</h3>
                    <Loader />
                </div>
            ) : (
                <div className={cls.container_list}>
                    <ul className={cls.list}>
                        {camper.slice(0, visibleCamperCount).map((item: any) => (
                            <li key={item.id}>
                                <Card {...item} />
                            </li>
                        ))}
                    </ul>
                    {camper.length > visibleCamperCount && (
                        <Button theme={ButtonTheme.LOAD_MORE} onClick={loadMore}>
                            Load more
                        </Button>
                    )}
                </div>
            )}
        </>
    );
};
