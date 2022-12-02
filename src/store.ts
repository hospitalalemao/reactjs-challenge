import { configureStore } from '@reduxjs/toolkit';
import provincesReducer from './features/provinces';

export default configureStore({
  reducer: {
    provinces: provincesReducer,
  },
});
