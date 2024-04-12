import cls from "./Category.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import IconAutomatic from "@/shared/assets/icons/categories/automatic.svg"
export const Automatic = () => {

    return (
        <div className={cls.container}>
            <div className={cls.container_icon}>
                <Icon
                    Svg={IconAutomatic}
                    width={20}
                    height={20}
                />
            </div>
            <p className={cls.container_text}>Automatic</p>
        </div>
    );
}