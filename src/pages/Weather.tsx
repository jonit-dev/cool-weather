import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { GeolocationButton } from '../components/global/Toolbar/GeolocationButton';
import { WeatherConditionIcon } from '../components/pages/Weather/WeatherConditionIcon';
import { WeatherForecast } from '../components/pages/Weather/WeatherForecast';
import { toggleLoading } from '../store/actions/loading.action';
import { loadCurrentWeatherData, loadWeatherForecastData } from '../store/actions/weather.action';
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

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log(`Loading weather data from ${city}`);
      if (city) {
        dispatch(toggleLoading(true, "Loading weather data..."));
        dispatch(loadCurrentWeatherData(city));
        dispatch(loadWeatherForecastData(city));
        dispatch(toggleLoading(false, null));
      }
    })();
  }, [city, dispatch]);

  return (
    <IonPage>
      <CustomHeader>
        <IonHeader translucent={true} mode="ios">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton color="light" />
            </IonButtons>
            <IonButtons slot="end">
              <GeolocationButton />
            </IonButtons>
            {/* <IonTitle>{pageTitle}</IonTitle> */}
          </IonToolbar>
        </IonHeader>
      </CustomHeader>

      <IonContent fullscreen color="danger">
        <IonHeader collapse="condense" translucent={true} mode="ios">
          {/* <IonToolbar>
            <IonTitle size="large">{pageTitle}</IonTitle>
          </IonToolbar> */}
        </IonHeader>
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
      </IonContent>
    </IonPage>
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

const CustomHeader = styled.div`
  ion-header {
    z-index: unset;
  }
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
