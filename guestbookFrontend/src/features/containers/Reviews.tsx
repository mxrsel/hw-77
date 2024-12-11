import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useEffect} from "react";
import {fetchReviews} from "../reviewsThunk.ts";
import Spinner from "../../UI/Spinner/Spinner.tsx";
import ReviewItem from "../components/ReviewItem.tsx";

const Reviews = () => {
    const dispatch = useAppDispatch();
    const reviews = useAppSelector((state) => state.reviews.reviews);
    const loading = useAppSelector((state) => state.reviews.isLoading);

    useEffect(() => {
        setTimeout(() => dispatch(fetchReviews()), 3000);
    }, [dispatch]);

    return (
        <div className='container'>
            {reviews.length === 0 ? <p>No reviews yet</p>
            :
            <>
                {loading ? <Spinner />
                    :
                    reviews.map((review) => (
                        <ReviewItem review={review} key={review.id} />
                    ))
                }
            </>
            }
        </div>
    );
};

export default Reviews;