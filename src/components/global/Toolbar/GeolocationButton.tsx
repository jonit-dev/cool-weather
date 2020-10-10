import { IonAlert, IonIcon } from '@ionic/react';
import { locateOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { changeWeatherCity } from '../../../store/actions/weather.action';

interface IProps {}

export const GeolocationButton: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();

  const onGeolocationChange = () => {
    setShowAlert(!showAlert);
  };

  const onTriggerCityChange = (city: string) => {
    dispatch(changeWeatherCity(city));
  };

  const [showAlert, setShowAlert] = useState<boolean>(false);

  return (
    <Container>
      <IonIcon icon={locateOutline} onClick={onGeolocationChange} />

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Change your Location"}
        message={"Select a new city value"}
        inputs={[
          {
            name: "City",
            type: "text",
            placeholder: "City",
          },
        ]}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              setShowAlert(false);
            },
          },
          {
            text: "Okay",
            handler: (value) => {
              onTriggerCityChange(value.City);
            },
          },
        ]}
      />
    </Container>
  );
};

const Container = styled.div`
  ion-icon {
    font-size: 1.5rem;
    color: white;
    position: relative;
    top: 0.3rem;
    right: 0.6rem;
  }
`;
