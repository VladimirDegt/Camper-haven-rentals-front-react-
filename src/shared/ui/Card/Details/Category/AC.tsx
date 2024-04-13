import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconAC from "@/shared/assets/icons/categories/ac.svg"
export const  AC = () => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={IconAC}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>AC</p>
        </div>
    );
}