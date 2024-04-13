import cls from './VehicleEquipment.module.scss'
import IconAC from "@/shared/assets/icons/categories/ac.svg";
import IconAutomatic from "@/shared/assets/icons/categories/automatic.svg";
import IconKitchen from "@/shared/assets/icons/categories/Kitchen.svg";
import IconTV from "@/shared/assets/icons/categories/TV.svg";
import IconShower from "@/shared/assets/icons/categories/Shower.svg";
import {Equipment} from "@/shared/ui/Equipment/Equipment";

const equipments= [
    {id: '0', value: 'ac', icon: IconAC, text: 'AC'},
    {id: '1', value: 'automatic', icon: IconAutomatic, text: 'Automatic'},
    {id: '2', value: true, icon: IconKitchen, text: 'Kitchen'},
    {id: '3', value: true, icon: IconTV, text: 'TV'},
    {id: '4', value: true, icon: IconShower, text: 'Shower/WCC'},
]
export const VehicleEquipment = () => {

    return (
        <div className={cls.container}>
            <p className={cls.text_filters}>Filters</p>
            <p className={cls.text_title}>Vehicle equipment</p>
            <div className={cls.line}/>
            <ul className={cls.list}>
                {equipments.map(({id, icon, text, value}) => (
                    <li key={id}>
                        <Equipment icon={icon} text={text} value={value}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}