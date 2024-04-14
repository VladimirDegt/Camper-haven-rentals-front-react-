import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import cls from './Modal_new.module.scss'
import { Icon } from '@/shared/ui/Icon/Icon';
import IconClose from "@/shared/assets/icons/other/close.svg"
import IconStar from "@/shared/assets/icons/other/star.svg"
import IconLocal from "@/shared/assets/icons/other/location.svg"
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { CardProps } from '@/shared/types/card';
import { PhotoList } from '@/shared/ui/PhotoList/PhotoList';
import { BlockCharacteristics } from '@/features/BlockCharacteristics/BlockCharacteristics';

interface Modal_newProps {
    item: CardProps;
    isOpenModal: boolean;
    handleCloseModal: () => void;
}

export const Modal_new = ({isOpenModal, handleCloseModal, item}: Modal_newProps) => {
    const {
        name,
        price,
        gallery,
        rating,
        reviews,
        location,
        description,
    } = item as CardProps;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isOpenModal)
    }, [isOpenModal]);

    const handleclose = () => {
        setIsOpen(false)
        handleCloseModal()
    }


    return (
        <Dialog
            open={isOpen}
            onClose={handleclose}
            className={cls.modal}
        >
            <Dialog.Panel className={cls.overlay}>
                <div className={cls.content}>
                    <div className={cls.content_title}>
                        <div className={cls.btn_close}>
                            <p className={cls.btn_close_text}>{name}</p>
                            <Button
                                onClick={handleclose}
                                theme={ButtonTheme.CLEAR}
                                className={cls.btn_close_btn}
                            >
                                <Icon
                                    Svg={IconClose}
                                    width={32}
                                    height={32}
                                />
                            </Button>

                        </div>
                        <div className={cls.reit_local}>
                            <div className={cls.reit_local_reit}>
                                <Icon
                                    Svg={IconStar}
                                    width={16}
                                    height={16}
                                />
                                <p className={cls.reit_local_text}>{rating}({reviews.length} Reviews)</p>
                            </div>
                            <div className={cls.reit_local_reit}>
                                <Icon
                                    Svg={IconLocal}
                                    width={16}
                                    height={16}
                                />
                                <p className={cls.reit_local_text_l}>{location}</p>
                            </div>
                        </div>
                        <div >
                            <p className={cls.price}>€{price}</p>
                        </div>
                    </div>
                    <PhotoList arr={gallery}/>
                    <p className={cls.description}>{description}</p>
                    // @ts-ignore
                    <BlockCharacteristics item={item}/>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}