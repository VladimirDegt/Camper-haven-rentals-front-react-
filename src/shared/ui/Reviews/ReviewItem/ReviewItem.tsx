import cls from './ReviewItem.module.scss'
import {Rating} from "@/shared/ui/Reviews/ReviewItem/Rating/Rating";
interface ReviewItemProp {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
}
export const ReviewItem = ({reviewer_name, reviewer_rating, comment  } : ReviewItemProp) => {
    return (
        <section>
            <div className={cls.block_name}>
                <div className={cls.name}>{reviewer_name[0]}</div>
                <div className={cls.rating}>
                    <p className={cls.name_review}>{reviewer_name}</p>
                    <Rating rating={reviewer_rating}/>
                </div>
            </div>
            <p className={cls.block_comment}>
                {comment}
            </p>
        </section>
    )
}