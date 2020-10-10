import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';

interface IProps {
  subtitle: string;
  title: string;
  imageUrl: string;
}

export const Place: React.FC<IProps> = ({ subtitle, title, imageUrl }) => {
  const onTriggerNavigation = () => {
    console.log("trigger navigation");
  };

  return (
    <IonCard>
      <img alt="place picture" src={imageUrl} />
      <IonCardHeader>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonButton
          expand="block"
          color="secondary"
          onClick={onTriggerNavigation}
        >
          Navigate
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};
