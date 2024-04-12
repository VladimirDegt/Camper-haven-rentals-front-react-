import cls from "./Card.module.scss";
import { Details } from "@/shared/ui/Card/Details/Details";
import { Icon } from '@/shared/ui/Icon/Icon';
import IconHeart from "@/shared/assets/icons/other/heart.svg"
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

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
                    <div className={cls.conteiner_price}>
                        <h2>{name}</h2>
                        <div className={cls.price}>
                            <h2>€{price},00</h2>
                            <Button theme={ButtonTheme.CLEAR}>
                                <Icon
                                    Svg={IconHeart}
                                    alt={'іконка додавання до обраного'}
                                    height={24}
                                    width={24}
                                />
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
            </div>
        </div>
    );
}