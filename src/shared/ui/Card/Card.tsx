import cls from "./Card.module.scss";
import {Details} from "@/shared/ui/Card/Details/Details";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconHeartDefault from "@/shared/assets/icons/other/heart_default.svg";
import IconHeartActive from "@/shared/assets/icons/other/heart_active.svg"
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useState} from "react";

export const Card = (
    {
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
        engine
    }) => {
const [isClickHeart, setIsClickHeart] = useState(false)
    const handleClickHeart = () => {
        setIsClickHeart(!isClickHeart)
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
                            <h2>€{price},00</h2>
                            <Button theme={ButtonTheme.CLEAR} onClick={handleClickHeart}>
                                {isClickHeart
                                    ? <Icon Svg={IconHeartActive} width={24} height={24}/>
                                    : <Icon Svg={IconHeartDefault} width={24} height={24}/>}
                            </Button>

                        </div>

                    </div>
                    <div className={cls.location}>
                        <h2>{rating}({reviews.length} Reviews)</h2>
                        <h2>{location}</h2>
                    </div>
                </div>
                <div className={cls.description}>
                    <p> {description}</p>
                </div>
                <Details
                    categories={details}
                    adults={adults}
                    transmission={transmission}
                    engine={engine}
                />
                <Button theme={ButtonTheme.SHOW}>Show more</Button>
            </div>
        </div>
    );
}