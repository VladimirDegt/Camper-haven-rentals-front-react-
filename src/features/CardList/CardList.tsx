import cls from "./CardList.module.scss";
import {Card} from "@/shared/ui/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {Loader} from "@/shared/ui/Loader/ui/Loader";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {campersActions} from "@/features/CardList/model/slice/camperSlice";
import {selectCampers, selectFilter} from "@/features/CardList/model/selectors/getAllCampers";
import {filterCampers} from "@/shared/lib/filterCampers/filterCampers";

export const CardList = () => {
    const [camper, setCamper] = useState([]);
    const [isLoadingServer, setIsLoadingServer] = useState(false);
    const [visibleCamperCount, setVisibleCamperCount] = useState(4);
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const filtered = useSelector(selectFilter);

    useEffect(() => {
        if(filtered) setCamper(filterCampers(campers, filtered));
    }, [filtered]);

    useEffect(() => {
        setIsLoadingServer(true);
        axios.get('https://camper-haven-rentals-back.onrender.com/camper/all')
            .then(response => {
                setCamper(response.data);
                dispatch(campersActions.addCamper(response.data))
            })
            .catch(error => console.log('error', error))
            .finally(() => setIsLoadingServer(false));
    }, []);

    useEffect(() => {
        if(campers.length > 0) setCamper(campers);
    }, []);

    const loadMore = () => setVisibleCamperCount(prevCount => prevCount + 4);

    const handleReset = () => {
        dispatch(campersActions.clearFilter());
        setCamper(campers);
    };

    return (
        <>
            {isLoadingServer ? (
                <div className={cls.loader}>
                    <h3>Зачекайте, сервер на render.com прободжується...</h3>
                    <Loader />
                </div>
            ) : (
                <section className={cls.container_list}>
                    <ul className={cls.list}>
                        {camper.length > 0
                            ? camper.slice(0, visibleCamperCount).map((item: any, index: number) => (
                                <li key={`${item.name} + ${index}`}>
                                    <Card item={item} />
                                </li>
                        ))
                            : <li className={cls.not_found}>
                                <h3>Нажаль, нічого не знайдено</h3>
                                <Button theme={ButtonTheme.SEARCH} onClick={handleReset}>Reset</Button>
                            </li>
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
};
