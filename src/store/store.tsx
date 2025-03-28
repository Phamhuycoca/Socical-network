import { configureStore } from '@reduxjs/toolkit';
import storeAlert from './reducers/alert.slice'
export const store = configureStore({
  reducer: {
    alert:storeAlert
  },
});

// Tạo type RootState và AppDispatch để dùng trong app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
