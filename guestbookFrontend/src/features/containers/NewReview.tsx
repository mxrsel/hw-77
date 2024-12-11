import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import {GuestBookMutation} from "../../types.ts";
import {createReview} from "../reviewsThunk.ts";
import Spinner from "../../UI/Spinner/Spinner.tsx";
import ReviewForm from "../components/ReviewForm.tsx";

const NewReview = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.reviews.isLoading);
    const navigate = useNavigate()

    const onSubmit = async (review: GuestBookMutation) => {
        await dispatch(createReview(review));
        navigate("/reviews");
    }
    return (
        <>
            {loading ? <Spinner/>
            :
            <ReviewForm onSubmit={onSubmit}/>
            }
        </>
    );
};

export default NewReview;