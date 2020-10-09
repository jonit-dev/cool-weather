import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import styled from 'styled-components';

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
      <IonHeader translucent={true} mode="ios">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="light" />
          </IonButtons>
          {/* <IonTitle>{pageTitle}</IonTitle> */}
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="danger">
        <IonHeader collapse="condense" translucent={true} mode="ios">
          {/* <IonToolbar>
            <IonTitle size="large">{pageTitle}</IonTitle>
          </IonToolbar> */}
        </IonHeader>

        <div className="ion-padding">
          <H1>Weather data</H1>
        </div>
      </IonContent>
    </IonPage>
  );
};

const H1 = styled.h1`
  font-family: "Helvetica Neue";
`;
