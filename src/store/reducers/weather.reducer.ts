import { ICurrentWeatherData } from '../types/weather.types';

export const LOAD_WEATHER = "LOAD_WEATHER";
export const CLEAR_WEATHER = "CLEAR_WEATHER";
export const CHANGE_WEATHER_CITY = " CHANGE_WEATHER_CITY";

const INITIAL_STATE: ICurrentWeatherData = {
  country: "CA",
  city: "Vancouver", // default city
  lat: 49.24966,
  lng: -123.11934,
  condition: null,
  conditionIcon: null,
  conditionDescription: null,
  tempCelsius: null,
  forecastData: [],
};

export const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return { ...state, ...action.payload };

    case CHANGE_WEATHER_CITY:
      const { city } = action.payload;
      return {
        ...state,
        city,
      };

    case CLEAR_WEATHER: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
