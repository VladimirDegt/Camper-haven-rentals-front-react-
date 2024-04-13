import cls from "./Details.module.scss";
import {Adults} from "@/shared/ui/Card/Details/Category/Adults";
import {Automatic} from "@/shared/ui/Card/Details/Category/Automatic";
import {AC} from "@/shared/ui/Card/Details/Category/AC";
import {Petrol} from "@/shared/ui/Card/Details/Category/Petrol";
import {Kitchen} from "@/shared/ui/Card/Details/Category/Kitchen";
import {Bed} from "@/shared/ui/Card/Details/Category/Bed";
import {AirConditioner} from "@/shared/ui/Card/Details/Category/AirConditioner";
import {CD} from "@/shared/ui/Card/Details/Category/CD";
import {Radio} from "@/shared/ui/Card/Details/Category/Radio";
import {Hob} from "@/shared/ui/Card/Details/Category/Hob";
import {Toilet} from "@/shared/ui/Card/Details/Category/Toilet";
import {Shower} from "@/shared/ui/Card/Details/Category/Shower";
import {Freezer} from "@/shared/ui/Card/Details/Category/Freezer";
import {Gaz} from "@/shared/ui/Card/Details/Category/Gaz";
import {Water} from "@/shared/ui/Card/Details/Category/Water";
import {Microwave} from "@/shared/ui/Card/Details/Category/Microwave";
import {DetailsItem} from "@/shared/types/card";

interface DetailsProps {
    categories: DetailsItem;
    adults: number;
    transmission: string;
    engine: string;
}

export const Details = ({categories, adults, transmission, engine} : DetailsProps) => {

    return (
        <ul className={cls.container}>
            {adults && <li><Adults value={adults}/></li>}
            {transmission && <li><Automatic/></li>}
            {categories.airConditioner !== 0 && <li> <AC/></li>}
            {engine && <li><Petrol/></li>}
            {categories.kitchen !== 0 && <li><Kitchen/></li>}
            {categories.beds !== 0 && <li><Bed value={categories.beds}/></li>}
            {categories.CD !== 0 && <li><CD/></li>}
            {categories.radio !== 0 && <li><Radio/></li>}
            {categories.hob !== 0 && <li><Hob value={categories.hob}/></li>}
            {categories.toilet !== 0 && <li><Toilet/></li>}
            {categories.shower !== 0 && <li><Shower/></li>}
            {categories.freezer !== 0 && <li><Freezer/></li>}
            {categories.gas  && <li><Gaz/></li>}
            {categories.water && <li><Water/></li>}
            {categories.microwave !== 0 && <li><Microwave/></li>}
        </ul>
    );
}