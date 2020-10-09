import { globalEnv } from '../../constants/global.config';
import { APIHelper } from '../../libs/RequestHelper';
import { LOAD_WEATHER } from '../reducers/weather.reducer';

export const loadWeatherData = (city: string) => async (dispatch) => {
  const { data } = await APIHelper.request(
    "GET",
    `/forecast?q=${city}&units=metric&appid=${globalEnv.weatherApiKey}`
  );

  console.log(data);

  dispatch({
    type: LOAD_WEATHER,
    payload: {
      city: data.city.name,
      condition: data.list[0].weather[0].main,
      conditionIcon: data.list[0].weather[0].icon,
      tempCelsius: data.list[0].main.temp,
    },
  });
};
