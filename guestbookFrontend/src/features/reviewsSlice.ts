import {createSlice} from "@reduxjs/toolkit";
import {GuestBook} from "../types.ts";
import {createReview, fetchReviews} from "./reviewsThunk.ts";

interface GuestBookState {
    reviews: GuestBook[];
    isLoading: boolean;
    isError: boolean
}

const initialState: GuestBookState = {
    reviews: [],
    isLoading: false,
    isError: false,
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchReviews.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                }
            )
            .addCase(
                fetchReviews.fulfilled, (state, {payload: reviews}) => {
                    state.isLoading = false
                    state.reviews = reviews
                }
            )
            .addCase(fetchReviews.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                }
            )
            .addCase(
                createReview.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                }
            )
            .addCase(
                createReview.fulfilled, (state) => {
                    state.isLoading = false
                }
            )
            .addCase(
                createReview.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
    }
})

export const reviewsReducer = reviewsSlice.reducer