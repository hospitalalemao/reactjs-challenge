import { createSlice } from '@reduxjs/toolkit';

export const provinces = createSlice({
  name: 'provinces',
  initialState: {
    value: [],
    total: {},
    selected: {},
  },
  reducers: {
    formatProvinces: (state, action) => {
      const provincesList = [];
      const provincesObj = action.payload;
      const provincesObjLength = Object.keys(provincesObj).length;

      let totalValues = {
        confirmed: 0,
        confirmed_diff: 0,
        deaths: 0,
        deaths_diff: 0,
        recovered: 0,
        recovered_diff: 0,
        fatality_rate: 0,
      };

      for (let i = 0; i <= provincesObjLength; i += 1) {
        if (provincesObj[i]) {
          totalValues = {
            confirmed: totalValues.confirmed + provincesObj[i].confirmed,
            confirmed_diff:
              totalValues.confirmed_diff + provincesObj[i].confirmed_diff,
            deaths: totalValues.deaths + provincesObj[i].deaths,
            deaths_diff: totalValues.deaths_diff + provincesObj[i].deaths_diff,
            recovered: totalValues.recovered + provincesObj[i].active,
            recovered_diff:
              totalValues.recovered_diff + provincesObj[i].active_diff,
            fatality_rate:
              totalValues.fatality_rate + provincesObj[i].fatality_rate,
          };

          provincesList.push({
            index: i,
            name: provincesObj[i].region.province,
            date: provincesObj[i].date,
            last_update: provincesObj[i].last_update,
            confirmed: provincesObj[i].confirmed,
            confirmed_diff: provincesObj[i].confirmed_diff,
            deaths: provincesObj[i].deaths,
            deaths_diff: provincesObj[i].deaths_diff,
            recovered: provincesObj[i].active,
            recovered_diff: provincesObj[i].active_diff,
            fatality_rate: provincesObj[i].fatality_rate,
          });
        }
      }

      state.total = totalValues;
      state.value = provincesList;
      state.selected = provincesList[0];
    },
    sortProvinces: (state, action) => {
      const { field, orderText } = action.payload;

      if (field) {
        const order = orderText === 'asc' ? 1 : -1;

        state.value.sort((provinceA: any, provinceB: any) => {
          if (provinceA[field] > provinceB[field]) {
            return 1 * order;
          }
          if (provinceA[field] < provinceB[field]) {
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
