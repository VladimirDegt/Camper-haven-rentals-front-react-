import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import PetrolI from "@/shared/assets/icons/categories/Petrol.svg"
export const Petrol = () => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={PetrolI}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>Petrol</p>
        </div>
    );
}