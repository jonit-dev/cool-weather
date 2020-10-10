import { globalEnv } from '../../constants/global.config';
import { DateHelper } from '../../libs/DateHelper';
import { APIHelper } from '../../libs/RequestHelper';
import { CHANGE_WEATHER_CITY, LOAD_WEATHER } from '../reducers/weather.reducer';
import { IWeatherForecastItem } from '../types/weather.types';

export const changeWeatherCity = (city: string) => async (dispatch) => {
  dispatch({
    type: CHANGE_WEATHER_CITY,
    payload: {
      city,
    },
  });
};

export const loadCurrentWeatherData = (city: string) => async (dispatch) => {
  const { data } = await APIHelper.request(
    "GET",
    `/weather?q=${city}&units=metric&appid=${globalEnv.weatherApiKey}`
  );

  dispatch({
    type: LOAD_WEATHER,
    payload: {
      city: data.name,
      condition: data.weather[0].main,
      conditionDescription: data.weather[0].description,
      conditionIcon: data.weather[0].icon,
      tempCelsius: data.main.temp,
    },
  });
};

export const loadWeatherForecastData = (city: string) => async (dispatch) => {
  const { data } = await APIHelper.request(
    "GET",
    `/forecast?q=${city}&units=metric&appid=${globalEnv.weatherApiKey}`
  );

  const forecastData: IWeatherForecastItem[] = data.list.map((item) => {
    return {
      city,
      date: DateHelper.getDateHumanFormat(item.dt_txt),
      condition: item.weather[0].main,
      conditionDescription: item.weather[0].description,
      conditionIcon: item.weather[0].icon,
      tempCelsius: item.main.temp,
    };
  });

  dispatch({
    type: LOAD_WEATHER,
    payload: {
      forecastData,
    },
  });
};
