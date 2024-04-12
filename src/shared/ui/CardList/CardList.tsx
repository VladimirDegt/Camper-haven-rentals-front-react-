import cls from "./CardList.module.scss";
import {Card} from "@/shared/ui/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

export const CardList = () => {
    const [camper, setCamper] = useState([]);
    useEffect(() => {
        axios.get('https://camper-haven-rentals-back.onrender.com/camper/all')
            .then(response => {
                setCamper(response.data)
            })
            .catch(error => {
                console.log('error', error)
            });
    }, []);

    return (
        <ul>
            {camper.length > 0 && camper.map((item: any) => (
                <li key={item.id}>
                     <Card  {...item}/>
                </li>
            ))}
        </ul>

    );
}