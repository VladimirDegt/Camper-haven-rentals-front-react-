import cls from './BlockCharacteristics.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useState } from 'react';
import { Characteristics } from '@/features/BlockCharacteristics/Characteristics/Characteristics';
import { CardProps } from '@/shared/types/card';

export const BlockCharacteristics = ({item} : CardProps) => {
    const [isClickFeatures, setIsClickFeatures] = useState(false);
    const [isClickReviews, setIsClickReviews] = useState(false);

    const handleClickFeatures = () => {
        setIsClickFeatures(!isClickFeatures)
        setIsClickReviews(false)
    }

    const handleClickReviews = () => {
        setIsClickReviews(!isClickReviews)
        setIsClickFeatures(false)
    }


    return (
        <>
            <div className={cls.name_block}>
                <Button theme={ButtonTheme.CLEAR} onClick={handleClickFeatures}>
                    <p className={`${cls.name_text} ${!isClickFeatures ? cls.visible : ''}`}>
                        Features
                    </p>
                </Button>
                <Button theme={ButtonTheme.CLEAR} onClick={handleClickReviews}>
                    <p className={`${cls.name_text} ${!isClickReviews ? cls.visible : ''}`}>Reviews</p>
                </Button>
            </div>
            <div className={cls.line}></div>
            <Characteristics item={item}/>
        </>
    )
}