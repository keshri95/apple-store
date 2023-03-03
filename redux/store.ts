import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { posts: PostsState, comment: CommonState,users:UserState }

export type AppDispatch = typeof store.dispatch;