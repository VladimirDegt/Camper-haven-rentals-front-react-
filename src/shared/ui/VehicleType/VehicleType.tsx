import cls from './VehicleType.module.scss'
import {Icon} from "@/shared/ui/Icon/Icon";
import {useEffect, useState} from "react";

interface Status {
    status: string;
    value: string;
}
interface VehicleTypeProps {
    icon: any;
    text: string;
    value: string;
    onClick: (value: Status) => void;
}
export const VehicleType = ({icon, text, value, onClick } : VehicleTypeProps) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if(!isClicked) {
            onClick({status: 'inactive', value: value});
        } else {
            onClick({status: 'active', value: value});
        }
    }, [isClicked, onClick, value]);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <button className={`${isClicked ? cls.active : cls.container}`} data-value={value}
            onClick={handleClick}>
            <Icon Svg={icon} width={40}
                height={28} data-value={value}/>
            <p className={cls.text}>{text}</p>
        </button>
    )
}