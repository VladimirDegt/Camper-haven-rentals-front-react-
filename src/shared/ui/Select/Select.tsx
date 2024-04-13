import cls from './Select.module.scss'
import {useEffect, useState} from 'react'
import {Listbox} from '@headlessui/react'
import {Icon} from "@/shared/ui/Icon/Icon";
import Svg from "@/shared/assets/icons/other/location.svg"
import {useSelector} from "react-redux";
import {selectCampers} from "@/features/CardList/model/selectors/getAllCampers";

const people = [
    {id: 1, name: 'Durward Reynolds'},
    {id: 2, name: 'Kenton Towne'},
    {id: 3, name: 'Therese Wunsch'},
    {id: 4, name: 'Benedict Kessler'},
    {id: 5, name: 'Katelyn Rohan'},
]

export const Select = () => {
    const [selectedPerson, setSelectedPerson] = useState({id: 0, name: 'вибери локацію'})
    const [options, setOptions] = useState([])
    const campers = useSelector(selectCampers);

    useEffect(() => {
        if (campers.length > 0) {
            const uniqueLocations = [...new Set(campers[0].map((item: any) => item.location))];
            // @ts-ignore
            setOptions(uniqueLocations.map((location: string, index: number) => ({ id: index + 1, name: location })));
        }
    }, [campers.length]);

    return (
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Label className={cls.label}>Location</Listbox.Label>
            <div className={cls.container_btn}>
                <Listbox.Button className={cls.button}>{selectedPerson.name}</Listbox.Button>
                <Icon Svg={Svg} width={18} height={20} className={cls.svg}/>
            </div>

            <Listbox.Options className={cls.options}>
                {options.map((option) => (
                    // @ts-ignore
                    <Listbox.Option key={option.id} value={option} className={cls.option}>
                        {/*@ts-ignore*/}
                        {option.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}