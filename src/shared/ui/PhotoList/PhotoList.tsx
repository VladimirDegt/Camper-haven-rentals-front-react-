import cls from './PhotoList.module.scss'
interface PhotoListProps {
    arr: string[]
}
export const PhotoList = ({arr}:PhotoListProps) => {
    return (
        <ul className={cls.container}>
            {arr.map((item, index) => <div key={index} className={cls.container_item}>
                <li >
                    <img
                        className={cls.container_img}
                        src={item}
                        alt="photo camper"
                        width={290}
                        height={310}
                    />
                </li>
            </div>
            )}
        </ul>
    )
}