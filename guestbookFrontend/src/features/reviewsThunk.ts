import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import {GuestBook, GuestBookMutation} from "../types.ts";

export const fetchReviews = createAsyncThunk<GuestBook[], void>(
    'reviews/fetchReviews',
    async () => {
        const response = await axiosApi<GuestBook[]>('/reviews')
        return response.data || [];
    }
);

export const createReview = createAsyncThunk<void, GuestBookMutation>(
    'reviews/createReview',
    async(review) => {
        const data = new FormData();

        const reviewKeys = Object.keys(review) as (keyof GuestBookMutation)[];

        reviewKeys.forEach((reviewKey) => {
            const keyValue = review[reviewKey];

            if (keyValue !== null) {
                data.append(reviewKey, keyValue)
            }
        })
        await axiosApi.post('/reviews', data);
    }
)