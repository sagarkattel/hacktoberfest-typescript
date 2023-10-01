import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import todoSlice from './features/todoSlice';

export const store = configureStore({
    reducer: {
      counter:counterSlice,
      todo:todoSlice
    },
  })
  

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch