import cls from "./Card.module.scss";
import CarI from '../../assets/image/car.png';
import {Details} from "@/shared/ui/Card/Details/Details";
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
                    <div className={cls.price}>
                        <h2>{name}</h2>
                        <h2>€{price},00</h2>
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
            </div>
        </div>
    );
}