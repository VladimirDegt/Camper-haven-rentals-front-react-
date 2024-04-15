import IconStarActive from "@/shared/assets/icons/other/star.svg";
import IconStarDisable from "@/shared/assets/icons/other/star_disable.svg";
import cls from './Rating.module.scss'
import {Icon} from "@/shared/ui/Icon/Icon";
export const Rating = ({rating} : {rating: number}) => {
    const disableStars = 5 - rating
    return (
        <ul className={cls.list}>
            {
                [...Array(rating)].map((_, index) => <li key={index}>
                    <Icon
                        Svg={IconStarActive }
                        width={16}
                        height={16}
                    />
                </li>)
            }
            {
                [...Array(disableStars)].map((_, index) => <li key={index}>
                    <Icon
                        Svg={IconStarDisable }
                        width={16}
                        height={16}
                    />
                </li>)
            }
        </ul>
    )
}