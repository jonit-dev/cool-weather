import { IonButtons, IonHeader, IonMenuButton, IonToolbar } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';

import { GeolocationButton } from '../Toolbar/GeolocationButton';

export const Header: React.FC = () => {
  return (
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
  );
};

const CustomHeader = styled.div`
  ion-header {
    z-index: unset;
  }
`;
