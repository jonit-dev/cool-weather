import { IonAlert } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearAlert } from '../../../store/actions/alert.action';
import { AppState } from '../../../store/reducers/index.reducers';
import { IAlert } from './ShowAlert.types';

export const ShowAlert: React.FC = () => {
  const alert = useSelector<AppState, IAlert>((state) => state.alertReducer);

  const dispatch = useDispatch();

  return (
    <IonAlert
      isOpen={alert.isActive || false}
      onDidDismiss={() => {
        if (alert.onDismiss) alert.onDismiss();

        //clear alert store
        dispatch(clearAlert());
      }}
      header={alert.title}
      subHeader={alert.subtitle}
      message={alert.message}
      buttons={alert.buttons}
      mode={alert.mode || "ios"}
    />
  );
};
