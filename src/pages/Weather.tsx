import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import { sunnyOutline } from 'ionicons/icons';
import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

import { globalEnv } from '../constants/global.config';
import { ConnectionHelper } from '../libs/RequestHelper';

export const WeatherPage: React.FC = () => {
  useEffect(() => {
    (async () => {
      const response = await ConnectionHelper.request(
        "GET",
        `/forecast?q=Vancouver&appid=${globalEnv.weatherApiKey}`
      );

      console.log(response);
    })();
  }, []);

  return (
    <IonPage>
      <CustomHeader>
        <IonHeader translucent={true} mode="ios">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton color="light" />
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
        <WeatherTitle>Vancouver</WeatherTitle>

        <WeatherInfoContainer className="ion-padding">
          <WeatherCenterPanel>
            <WeatherConditionRow>
              <WeatherConditionTitle>Sunny</WeatherConditionTitle>
            </WeatherConditionRow>

            <WeatherConditionRow>
              <WeatherConditionIcon>
                <IonIcon icon={sunnyOutline} />
              </WeatherConditionIcon>

              <WeatherTemperature>75°</WeatherTemperature>
            </WeatherConditionRow>
          </WeatherCenterPanel>
        </WeatherInfoContainer>
      </IonContent>
    </IonPage>
  );
};

const WeatherInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 70%;
`;

const WeatherCenterPanel = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
`;

const WeatherConditionTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  position: relative;
  top: -2rem;
  letter-spacing: 2px;
`;

const WeatherConditionIcon = styled.div`
  flex: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  ion-icon {
    font-size: 5rem;
    margin: 0 auto;
  }
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
  font-size: 1.4rem;
  position: relative;
  top: -1.9rem;
  font-weight: 600;
  letter-spacing: 2px;
`;
