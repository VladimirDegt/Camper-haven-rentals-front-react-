import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import Svg from "@/shared/assets/icons/categories/Shower.svg"
export const Shower = () => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={Svg}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>Shower</p>
        </div>
    );
}