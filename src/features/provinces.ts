import { createSlice } from '@reduxjs/toolkit';

export const provinces = createSlice({
  name: 'provinces',
  initialState: {
    value: [],
  },
  reducers: {
    formatProvinces: (state, action) => {
      const provincesList = [];
      const provincesObj = action.payload;
      const provincesObjLength = Object.keys(provincesObj).length;

      for (let i = 0; i <= provincesObjLength; i += 1) {
        if (provincesObj[i]) {
          provincesList.push({
            index: i,
            name: provincesObj[i].region.province,
            date: provincesObj[i].date,
            confirmed: provincesObj[i].confirmed,
            deaths: provincesObj[i].deaths,
            confirmed_diff: provincesObj[i].confirmed_diff,
            deaths_diff: provincesObj[i].deaths_diff,
            last_update: provincesObj[i].last_update,
            recovered: provincesObj[i].active,
            recovered_diff: provincesObj[i].active_diff,
            fatality_rate: provincesObj[i].fatality_rate,
          });
        }
      }

      state.value = provincesList;
    },
    sortProvinces: (state, action) => {
      const { field, orderText } = action.payload;

      if (field) {
        const order = orderText === 'asc' ? 1 : -1;

        state.value.sort((stateA: any, stateB: any) => {
          if (stateA[field] > stateB[field]) {
            return 1 * order;
          }
          if (stateA[field] < stateB[field]) {
            return -1 * order;
          }
          return 0;
        });
      }
    },
  },
});

export const { formatProvinces, sortProvinces } = provinces.actions;

export default provinces.reducer;
