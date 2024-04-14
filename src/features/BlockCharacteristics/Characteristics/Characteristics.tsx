import cls from './Characteristics.module.scss'
import { Details } from '@/shared/ui/Card/Details/Details';
import { CardProps } from '@/shared/types/card';
import { VehicleDetails } from '@/features/BlockCharacteristics/VehicleDetails/VehicleDetails';
interface CharacteristicsProps {
    item: CardProps
}
export const Characteristics = ({item} : CharacteristicsProps) => {
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