import { IAction } from '../types/redux.types';
import { IWeatherData } from '../types/weather.types';

export const LOAD_WEATHER = "LOAD_WEATHER";
export const CLEAR_WEATHER = "CLEAR_WEATHER";

const INITIAL_STATE: IWeatherData = {
  city: "Vancouver", // default city
  condition: null,
  conditionIcon: null,
  tempCelsius: null,
};

export const weatherReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return { ...state, ...action.payload };

    case CLEAR_WEATHER: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
