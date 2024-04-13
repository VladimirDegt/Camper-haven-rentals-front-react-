import cls from './VehicleTypeList.module.scss'
import IconAlsove from "@/shared/assets/icons/camper/alsove.svg";
import IconFull from "@/shared/assets/icons/camper/fully.svg";
import IconPanel from "@/shared/assets/icons/camper/van.svg";
import {VehicleType} from "@/shared/ui/VehicleType/VehicleType";
import {useEffect, useState} from "react";

const types= [
    {id: '0', value: 'alcove', icon: IconAlsove, text: 'Van'},
    {id: '1', value: 'fullyIntegrated', icon: IconFull, text: 'Fully Integrated'},
    {id: '2', value: 'panelTruck', icon: IconPanel, text: 'Van'},

]

interface VehicleTypeListProps {
    getType: (value: string[]) => void;
}
export const VehicleTypeList = ({getType}: VehicleTypeListProps) => {
    const [filterTypes, setFilterTypes] = useState([]);

    useEffect(() => {
        if(filterTypes.length > 0){
            getType(filterTypes);
        } else {
            getType([]);
        }
    }, [filterTypes.length]);

    const handleClick = ({value, status}: {
        status: string;
        value: string;
    }) => {
        if (status === 'active') {
            // @ts-ignore
            setFilterTypes(prevState => [...prevState, value]);
        } else if (status === 'inactive') {
            setFilterTypes(prevState =>
                prevState.filter(equipment => equipment !== value)
            );
        }
    };

    return (
        <div className={cls.container}>
            <p className={cls.text_title}>Vehicle type</p>
            <div className={cls.line}/>
            <ul className={cls.list}>
                {types.map(({id, icon, text, value}) => (
                    <li key={id}>
                        <VehicleType
                            icon={icon}
                            text={text}
                            value={value}
                            onClick={handleClick}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}