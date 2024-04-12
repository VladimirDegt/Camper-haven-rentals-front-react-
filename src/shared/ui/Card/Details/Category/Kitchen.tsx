import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import KitchenI from "@/shared/assets/icons/categories/Kitchen.svg"
export const Kitchen = () => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={KitchenI}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>kitchen</p>
        </div>
    );
}