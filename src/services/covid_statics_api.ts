import axios from 'axios';

const covidStaticsUrlApi = 'https://covid-19-statistics.p.rapidapi.com/';

const api = axios.create({
  baseURL: covidStaticsUrlApi,
  headers: {
    'X-RapidAPI-Key': 'f13a1c90ebmshe437f7843b0a835p12b67cjsn71d4983e54fa',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
  },
});

export default api;
