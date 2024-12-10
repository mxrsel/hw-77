import {createSlice} from "@reduxjs/toolkit";
import {GuestBook} from "../types.ts";

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

    }
})

export const reviewsReducer = reviewsSlice.reducer