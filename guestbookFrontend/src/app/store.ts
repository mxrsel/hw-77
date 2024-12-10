import { configureStore } from '@reduxjs/toolkit';
import {reviewsReducer} from "../features/reviewsSlice.ts";

export const store = configureStore({
    reducer: {
        reviews: reviewsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;