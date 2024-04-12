import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import Svg from "@/shared/assets/icons/categories/CD.svg"
export const CD = () => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={Svg}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>CD</p>
        </div>
    );
}