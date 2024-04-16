import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import Svg from "@/shared/assets/icons/categories/AirConditioner.svg"
import {CategoryProps} from "@/shared/ui/Card/Details/types/categories";
export const AirConditioner = ({value}: CategoryProps) => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={Svg}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>{value}</p>
            <p className={cls.container_text}>Air conditioner</p>
        </div>
    );
}