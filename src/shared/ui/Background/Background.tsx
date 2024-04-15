import cls from './Background.module.scss';
// @ts-ignore
import Image from "@/shared/assets/image/background.webp";
import {Text} from "@/shared/ui/Text/Text";

export const Background = () => {
    return (
        <div className={cls.background}>
            <h1 className={cls.title}>Welcome to our website! </h1>
            <p className={cls.text}>We specialize in camper rentals, offering a range of services to enhance your adventure. Whether you're planning a weekend getaway or a cross-country road trip, we have the perfect camper for you. Explore our fleet and start planning your next journey today!</p>
        </div>
    )
}