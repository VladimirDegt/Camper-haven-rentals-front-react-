import cls from './Equipment.module.scss'
import {Icon} from "@/shared/ui/Icon/Icon";
import {useState} from "react";

interface Status {
    status: string;
    value: string;
}
interface EquipmentProps {
    icon: any;
    text: string;
    value: string;
    onClick: (value: Status) => void;
}
export const Equipment = ({icon, text, value, onClick}: EquipmentProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        if(!isClicked) {
            onClick({status: 'active', value: value});
        } else {
            onClick({status: 'inactive', value: value});
        }
    };

    return (
        <button className={`${isClicked ? cls.active : cls.container}`} data-value={value}
            onClick={handleClick}>
            <Icon Svg={icon} width={32}
                height={32}/>
            <p className={cls.text}>{text}</p>
        </button>
    )
}