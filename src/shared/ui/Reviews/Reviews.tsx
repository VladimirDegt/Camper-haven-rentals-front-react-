import {ReviewItem} from "@/shared/ui/Reviews/ReviewItem/ReviewItem";
import cls from './Reviews.module.scss'
interface ReviewItemProp {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
}
export const Reviews = ({reviews}: {reviews: ReviewItemProp[]}) => {
    return (
        <ul className={cls.list}>
            {reviews.map((review, index) => (
                <ReviewItem
                    key={`${review.reviewer_name}` + index}
                    reviewer_name={review.reviewer_name}
                    reviewer_rating={review.reviewer_rating}
                    comment={review.comment}
                />
            ))}
        </ul>
    )
}