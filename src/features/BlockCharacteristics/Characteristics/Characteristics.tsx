import cls from './Characteristics.module.scss'
import { Details } from '@/shared/ui/Card/Details/Details';
import { CardProps } from '@/shared/types/card';
import { VehicleDetails } from '@/features/BlockCharacteristics/VehicleDetails/VehicleDetails';
// @ts-ignore
export const Characteristics = ({item} : CardProps) => {
    const {
        engine,
        transmission,
        details,
        adults
    } = item as CardProps;
        return (
            <div className={cls.container}>
                <Details
                    categories={details}
                    adults={adults}
                    transmission={transmission}
                    engine={engine}
                />
                <VehicleDetails item={item} />
            </div>
        )
}