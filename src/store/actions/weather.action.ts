import { globalEnv } from '../../constants/global.config';
import { DateHelper } from '../../libs/DateHelper';
import { APIHelper } from '../../libs/RequestHelper';
import { LOAD_WEATHER } from '../reducers/weather.reducer';
import { IWeatherForecastItem } from '../types/weather.types';
import { showAlert } from './alert.action';

export const loadCurrentWeatherData = (city: string) => async (dispatch) => {
  let response;
  try {
    response = await APIHelper.request(
      "GET",
      `/weather?q=${city}&units=metric&appid=${globalEnv.weatherApiKey}`
    );
  } catch (error) {
    console.error(error);
    dispatch(
      showAlert({
        title: "Oops!",
        subtitle: "Error",
        message:
          "Error while trying to load your city data. Please check for any typos!",
        buttons: ["Try Again"],
      })
    );
    return;
  }

  const { data } = response;
  console.log(data);
  dispatch({
    type: LOAD_WEATHER,
    payload: {
      country: data.sys.country,
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
