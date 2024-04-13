import cls from './VehicleEquipment.module.scss'
import IconAC from "@/shared/assets/icons/categories/ac.svg";
import IconAutomatic from "@/shared/assets/icons/categories/automatic.svg";
import IconKitchen from "@/shared/assets/icons/categories/Kitchen.svg";
import IconTV from "@/shared/assets/icons/categories/TV.svg";
import IconShower from "@/shared/assets/icons/categories/Shower.svg";
import {Equipment} from "@/shared/ui/Equipment/Equipment";
import {useEffect, useState} from "react";

const equipments= [
    {id: '0', value: 'ac', icon: IconAC, text: 'AC'},
    {id: '1', value: 'transmission', icon: IconAutomatic, text: 'Automatic'},
    {id: '2', value: 'kitchen', icon: IconKitchen, text: 'Kitchen'},
    {id: '3', value: 'TV', icon: IconTV, text: 'TV'},
    {id: '4', value: 'shower', icon: IconShower, text: 'Shower/WCC'},
]

interface EquipmentProps {
    getEquipment: (value: string[]) => void;
}
export const VehicleEquipment = ({getEquipment}: EquipmentProps) => {
    const [filterEquipments, setFilterEquipments] = useState([]);

    useEffect(() => {
        if(filterEquipments.length > 0){
            getEquipment(filterEquipments);
        } else {
            getEquipment([]);
        }
    }, [filterEquipments.length]);
    const handleClick = ({status, value}: {
        status: string;
        value: string;
    }) => {
        if (status === 'active') {
            // @ts-ignore
            setFilterEquipments(prevState => [...prevState, value]);
        } else if (status === 'inactive') {
            setFilterEquipments(prevState =>
                prevState.filter(equipment => equipment !== value)
            );
        }
    };

    return (
        <div className={cls.container}>
            <p className={cls.text_filters}>Filters</p>
            <p className={cls.text_title}>Vehicle equipment</p>
            <div className={cls.line}/>
            <ul className={cls.list}>
                {equipments.map(({id, icon, text, value}) => (
                    <li key={id}>
                        <Equipment
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