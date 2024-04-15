import cls from './FilterSection.module.scss'
import {Select} from "@/shared/ui/Select/Select";
import {VehicleEquipment} from "@/features/FilterSection/VehicleEquipment/VehicleEquipment";
import {VehicleTypeList} from "@/features/FilterSection/VehicleTypeList/VehicleTypeList";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useCallback, useState} from "react";
import {toast} from 'react-toastify';
import {campersActions} from "@/features/CardList/model/slice/camperSlice";
import {useDispatch} from "react-redux";

const customId = "toastId";
export const FilterSection = () => {
    const [location, setLocation] = useState('');
    const [equipment, setEquipment] = useState<string[]>([]);
    const [type, setType] = useState<string[]>([]);
    const dispatch = useDispatch();

    const getLocation = useCallback((value: string) => {
        setLocation(value);
    }, [setLocation]);

    const getEquipment = useCallback((value: string[]) => {
        setEquipment(value);
    }, [setEquipment]);

    const getType = useCallback((value: string[]) => {
        setType(value);
    }, [setType]);

    const handleClick = () => {
        if(location === 'choose a location') return toast.error('Choose a location', {toastId: customId});
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