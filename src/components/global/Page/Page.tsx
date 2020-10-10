import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';

import { Header } from '../Header/Header';

interface IProps {
  children: any;
}

export const Page: React.FC<IProps> = (props) => {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen color="danger" className="ion-padding">
        <IonHeader collapse="condense" translucent={true} mode="ios">
          {/* <IonToolbar>
        <IonTitle size="large">{pageTitle}</IonTitle>
      </IonToolbar> */}
        </IonHeader>

        {props.children}
      </IonContent>
    </IonPage>
  );
};
