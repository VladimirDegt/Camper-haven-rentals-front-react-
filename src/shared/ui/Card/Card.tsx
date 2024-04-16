import cls from "./Card.module.scss";
import {Details} from "@/shared/ui/Card/Details/Details";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconHeartDefault from "@/shared/assets/icons/other/heart_default.svg";
import IconHeartActive from "@/shared/assets/icons/other/heart_active.svg"
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useState} from "react";
import {CardProps} from "@/shared/types/card";
import { useDispatch } from 'react-redux';
import { campersActions } from '@/features/CardList/model/slice/camperSlice';
import { Modal_new } from '@/shared/ui/Modal_new/Modal_new';
import axios from "axios";

interface CardI {
    item: CardProps
}

export const Card = ({ item }: CardI) => {
    const {
        name,
        price,
        gallery,
        rating,
        reviews,
        location,
        details,
        description,
        adults,
        transmission,
        engine,
        favorite
    } = item as CardProps;
const [isOpenModal, setIsOpenModal] = useState(false);
const [isDisabled, setIsDisabled] = useState(false);

const dispatch = useDispatch();
    const handleClickHeart = () => {
        if (!favorite) {
            setIsDisabled(true);
            // axios.post('http://localhost:3002/camper/create', {itemFavorite: item._id})
                axios.post('https://camper-haven-rentals-back.onrender.com/camper/create', {itemFavorite: item._id})
                .then(response => {
                    dispatch(campersActions.updateCamperFavorite(response.data))
                })
                .catch(error => console.log('error', error))
                .finally(() => setIsDisabled(false))
        }
        if (favorite) {
            setIsDisabled(true);
            // axios.delete(`http://localhost:3002/camper/delete/${item._id}` )
                axios.delete(`https://camper-haven-rentals-back.onrender.com/camper/delete/${item._id}`)
                .then(response => {
                    dispatch(campersActions.updateCamperFavorite(response.data))
                })
                .catch(error => console.log('error', error))
                .finally(() => setIsDisabled(false))
        }
    };

    const handleOpenModal=()=>{
        setIsOpenModal(true);
    }

    const handleCloseModal=()=>{
        setIsOpenModal(false);
    }

    return (
        <div className={cls.container}>
            <div className={cls.container_img}>
                <img
                    className={cls.container_item_img}
                    src={gallery[0]}
                    alt={'фото кемпера'}
                    width={290}
                    height={310}
                />
            </div>
            <div className={cls.container_content}>
                <div className={cls.container_content_title}>
                    <div className={cls.container_price}>
                        <h2>{name}</h2>
                        <div className={cls.price}>
                            <h2>€{price}</h2>
                            <Button
                                theme={ButtonTheme.CLEAR}
                                onClick={handleClickHeart}
                                disabled={isDisabled}
                                className={cls.btn_heart}
                            >
                                {favorite
                                    ? <Icon
                                            Svg={IconHeartActive}
                                            width={24}
                                            height={24}
                                    />
                                    : <Icon
                                            Svg={IconHeartDefault}
                                            width={24}
                                            height={24}
                                    />}
                            </Button>
                        </div>
                    </div>
                    <div className={cls.location}>
                        <h2>{rating}({reviews.length} Reviews)</h2>
                        <h2>{location}</h2>
                    </div>
                </div>
                <div className={cls.description}>
                    <p className={cls.description_text}> {description}</p>
                </div>
                <Details
                    categories={details}
                    adults={adults}
                    transmission={transmission}
                    engine={engine}
                />
                <Button theme={ButtonTheme.SHOW} onClick={handleOpenModal}>Show more</Button>
            </div>
            <Modal_new
                item={item}
                isOpenModal={isOpenModal}
                handleCloseModal={handleCloseModal}
            />
        </div>
    );
}