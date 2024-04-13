import cls from './Equipment.module.scss'
import {Icon} from "@/shared/ui/Icon/Icon";

interface EquipmentProps {
    icon: any;
    text: string;
    value: string | boolean;
}
export const Equipment = ({icon, text, value}: EquipmentProps) => {

    return (
        <button className={cls.container} data-value={value}>
            <Icon Svg={icon} width={32} height={32}/>
            <p className={cls.text}>{text}</p>
        </button>
    )
}