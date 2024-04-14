import cls from './Select.module.scss'
import {useEffect, useState} from 'react'
import {Listbox} from '@headlessui/react'
import {Icon} from "@/shared/ui/Icon/Icon";
import Svg from "@/shared/assets/icons/other/location.svg"
import {useSelector} from "react-redux";
import {selectCampers} from "@/features/CardList/model/selectors/getAllCampers";

interface SelectProps {
    getLocation: (value: string) => void
}

export const Select = ({getLocation} : SelectProps) => {
    const [selectedLocation, setSelectedLocation] = useState({id: 0, name: 'choose a location'})
    const [options, setOptions] = useState([])
    const campers = useSelector(selectCampers);

    useEffect(() => {
        if (campers.length > 0) {
            const uniqueLocations = [...new Set(campers.map((item: any) => item.location))];
            // @ts-ignore
            setOptions(uniqueLocations.map((location: string, index: number) => ({ id: index + 1, name: location })));
        }
    }, [campers, campers.length]);

    useEffect(() => {
        getLocation(selectedLocation.name);
    }, [getLocation, selectedLocation]);

    return (
        <Listbox value={selectedLocation} onChange={setSelectedLocation}>
            <Listbox.Label className={cls.label}>Location</Listbox.Label>
            <div className={cls.container_btn}>
                <Listbox.Button
                    className={cls.button}
                >
                    {selectedLocation.name}
                </Listbox.Button>
                <Icon Svg={Svg} width={18}
                    height={20} className={cls.svg}/>
            </div>

            <Listbox.Options className={cls.options}>
                {options.map((option) => (
                    // @ts-ignore
                    <Listbox.Option key={option.id} value={option}
                        className={cls.option}>
                        {/*@ts-ignore*/}
                        {option.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}