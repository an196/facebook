import { configureStore } from '@reduxjs/toolkit';
import commentReducer from '../features/Friend/commentSlice';

export const store = configureStore({
    reducer: {
        comment: commentReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  })