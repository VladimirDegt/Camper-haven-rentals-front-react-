import cls from './FilterSection.module.scss'
import {Select} from "@/shared/ui/Select/Select";
import {VehicleEquipment} from "@/features/FilterSection/VehicleEquipment/VehicleEquipment";
import {VehicleTypeList} from "@/features/FilterSection/VehicleTypeList/VehicleTypeList";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useState} from "react";
import {toast} from 'react-toastify';
import {campersActions} from "@/features/CardList/model/slice/camperSlice";
import {useDispatch} from "react-redux";

const customId = "toastId";
export const FilterSection = () => {
    const [location, setLocation] = useState('');
    const [equipment, setEquipment] = useState<string[]>([]);
    const [type, setType] = useState<string[]>([]);
    const dispatch = useDispatch();

    const getLocation = (value: string) => {
        setLocation(value);
    }

    const getEquipment = (value: string[]) => {
        setEquipment(value);
    }

    const getType = (value: string[]) => {
        console.log('value', value)
        setType(value);
    }

    const handleClick = () => {
        if(location === 'вибери локацію') {
            toast.error('Виберіть локацію', {toastId: customId})
            return
        }
        dispatch(campersActions.addFilter({location, equipment, type}))
    }

    return (
        <section >
            <Select getLocation={getLocation}/>
            <VehicleEquipment getEquipment={getEquipment} />
            <VehicleTypeList getType={getType} />
            <Button
                theme={ButtonTheme.SEARCH}
                className={cls.btn}
                onClick={handleClick}
            >
                Search
            </Button>
        </section>
    )
}