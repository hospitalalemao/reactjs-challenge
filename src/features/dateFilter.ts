import { createSlice } from '@reduxjs/toolkit';
import { format, subDays } from 'date-fns';

export const dateFilter = createSlice({
  name: 'dateFilter',
  initialState: {
    date: subDays(new Date(), 1).toString(),
    dateFilter: '',
  },
  reducers: {
    setDateFilter: (state, action) => {
      const newDate = action.payload;
      state.date = newDate;
      state.dateFilter = format(new Date(newDate), 'yyyy-MM-dd');
    },
  },
});

export const { setDateFilter } = dateFilter.actions;

export default dateFilter.reducer;
