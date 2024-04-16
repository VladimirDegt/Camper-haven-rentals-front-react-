import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconAdults from "@/shared/assets/icons/categories/adults.svg";
import {CategoryProps} from "@/shared/ui/Card/Details/types/categories";

export const Adults = ({value}: CategoryProps) => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={IconAdults}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>{value}</p>
            <p className={cls.container_text}>adults</p>
        </div>
    );
}