import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { BrowserHelper } from '../../../libs/BrowserHelper';
import { showAlert } from '../../../store/actions/alert.action';
import { AppState } from '../../../store/reducers/index.reducers';
import { ILocation } from '../../../store/types/geo.types';
import { ICurrentWeatherData } from '../../../store/types/weather.types';

interface IProps {
  subtitle: string;
  title: string;
  imageUrl: string;
  location: ILocation;
}

export const Place: React.FC<IProps> = ({
  subtitle,
  title,
  imageUrl,
  location,
}) => {
  const dispatch = useDispatch();
  const { city, country } = useSelector<AppState, ICurrentWeatherData>(
    (state) => state.weatherReducer
  );

  const onTriggerNavigation = () => {
    console.log("trigger navigation");

    if (BrowserHelper.isBrowser()) {
      dispatch(
        showAlert({
          title: "Oops!",
          subtitle: "Error",
          message: "This feature is only available for mobile devices!",
          buttons: ["Ok"],
        })
      );
      return;
    }

    // else, lets navigate!

    let options: LaunchNavigatorOptions = {
      start: `${city}, ${country}`,
      app: LaunchNavigator.APP.GOOGLE_MAPS,
    };

    const { lat, lng } = location;

    LaunchNavigator.navigate([lat, lng], options).then(
      (success) => console.log("Launched navigator"),
      (error) => console.log("Error launching navigator", error)
    );
  };

  return (
    <Container>
      <IonCard>
        <Img alt="place" src={imageUrl} />
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
