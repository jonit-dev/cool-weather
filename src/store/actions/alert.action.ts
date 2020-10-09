import { IAlert } from '../../components/global/ShowAlert/ShowAlert.types';
import { CLEAR_ALERT, SHOW_ALERT } from '../reducers/alert.reducer';

export const showAlert = (alert: IAlert) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: {
      ...alert,
      isActive: true,
    },
  });
};

export const clearAlert = () => (dispatch) => {
  dispatch({
    type: CLEAR_ALERT,
  });
};
