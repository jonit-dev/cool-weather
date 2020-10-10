import axios from 'axios';

export const weatherApiAxios = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});

export const googlePlacesApiAxios = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?",
});
