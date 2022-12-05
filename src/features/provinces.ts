import { createSlice } from '@reduxjs/toolkit';

export const provinces = createSlice({
  name: 'provinces',
  initialState: {
    value: [],
    total: {},
    selected: {},
  },
  reducers: {
    selectProvince: (state, action) => {
      /* eslint no-param-reassign: "error" */
      state.selected = action.payload;
    },
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
      const totalValuesFormatted = {
        confirmed: totalValues.confirmed,
        confirmed_diff: totalValues.confirmed_diff,
        deaths: totalValues.deaths,
        deaths_diff: totalValues.deaths_diff,
        recovered: totalValues.recovered,
        recovered_diff: totalValues.recovered_diff,
        fatality_rate: totalValues.fatality_rate,
      };

      /* eslint no-param-reassign: "error" */
      state.total = totalValuesFormatted;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.value = provincesList;

      state.selected = provincesList[0];
    },
  },
});

export const { formatProvinces, selectProvince } = provinces.actions;

export default provinces.reducer;
