import cls from './VehicleDetails.module.scss'
import { CardProps } from '@/shared/types/card';
interface VehicleDetailsProps {
    item: CardProps
}
export const VehicleDetails = ({item}: VehicleDetailsProps) => {
const {
    form,
    length,
    width,
    height,
    tank,
    consumption
} = item as CardProps

    return (
        <div className={cls.container}>
            <p className={cls.title}>Vehicle details</p>
            <div className={cls.line}></div>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <p className={cls.text}>Form</p>
                    <p className={cls.text}>{form}</p>
                </li>
                <li className={cls.item}>
                    <p className={cls.text}>Length</p>
                    <p className={cls.text}>{length}</p>
                </li>
                <li className={cls.item}>
                    <p className={cls.text}>Width</p>
                    <p className={cls.text}>{width}</p>
                </li>
                <li className={cls.item}>
                    <p className={cls.text}>Height</p>
                    <p className={cls.text}>{height}</p>
                </li>
                <li className={cls.item}>
                    <p className={cls.text}>Tank</p>
                    <p className={cls.text}>{tank}</p>
                </li>
                <li className={cls.item}>
                    <p className={cls.text}>Consumption</p>
                    <p className={cls.text}>{consumption}</p>
                </li>
            </ul>
        </div>
    )
}