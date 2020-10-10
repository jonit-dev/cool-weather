import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { Page } from '../components/global/Page/Page';
import { WeatherConditionIcon } from '../components/pages/Weather/WeatherConditionIcon';
import { WeatherForecast } from '../components/pages/Weather/WeatherForecast';
import { AppState } from '../store/reducers/index.reducers';
import { ICurrentWeatherData } from '../store/types/weather.types';

export const WeatherPage: React.FC = () => {
  const {
    country,
    city,
    condition,
    conditionDescription,
    conditionIcon,
    tempCelsius,
    forecastData,
  } = useSelector<AppState, ICurrentWeatherData>(
    (state) => state.weatherReducer
  );

  return (
    <Page>
      {city && (
        <>
          <WeatherTitle>
            {city}, {country}
          </WeatherTitle>

          <WeatherInfoContainer className="ion-padding">
            <WeatherCenterPanel>
              <WeatherConditionRow>
                <WeatherConditionTitle>
                  {condition} ({conditionDescription})
                </WeatherConditionTitle>
              </WeatherConditionRow>

              <WeatherConditionRow>
                {conditionIcon && (
                  <WeatherConditionIcon conditionIcon={conditionIcon} />
                )}
                <WeatherTemperature>{tempCelsius}°</WeatherTemperature>
              </WeatherConditionRow>
            </WeatherCenterPanel>
          </WeatherInfoContainer>
        </>
      )}
      {forecastData && <WeatherForecast weatherData={forecastData} />}
    </Page>
  );
};

const WeatherInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 60%;
`;

const WeatherCenterPanel = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;

  /*DESKTOP ONLY CODE*/
  @media screen and (min-width: 700px) {
    max-width: 300px;
  }
`;

const WeatherConditionTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  position: relative;
  top: -2rem;
  letter-spacing: 2px;
`;

const WeatherTemperature = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`;

const WeatherConditionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 100%;
`;

const WeatherTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  position: relative;
  top: -1.8rem;
  font-weight: 600;
  letter-spacing: 2px;
`;
