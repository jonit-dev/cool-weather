import { globalEnv } from '../../constants/global.config';
import { APIHelper } from '../../libs/RequestHelper';
import { LOAD_WEATHER } from '../reducers/weather.reducer';
import { IWeatherForecastItem } from '../types/weather.types';

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
      date: item.dt,
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
