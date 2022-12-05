import { configureStore } from '@reduxjs/toolkit';
import provincesReducer from './features/provinces';
import dateFilterReducer from './features/dateFilter';

export const store = configureStore({
  reducer: {
    provinces: provincesReducer,
    dateFilter: dateFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
