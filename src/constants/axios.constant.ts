import axios from 'axios';

export const weatherApiAxios = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});
