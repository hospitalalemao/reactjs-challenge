export interface Region {
  iso: string;
  name: string;
  province: string;
  lat: string;
  long: string;
  cities: [];
}

export interface ProvinceAPI {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  confirmed_diff: number;
  deaths_diff: number;
  recovered_diff: number;
  last_update: string;
  active: number;
  active_diff: number;
  fatality_rate: number;
  region: Region;
}

export interface Province {
  index: number;
  name: string;
  date: string;
  confirmed: number;
  deaths: number;
  confirmed_diff: number;
  deaths_diff: number;
  last_update: string;
  recovered: number;
  recovered_diff: number;
  fatality_rate: number;
}
