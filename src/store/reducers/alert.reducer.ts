import { IAlert } from '../../components/global/ShowAlert/ShowAlert.types';
import { IAction } from '../types/redux.types';

export const SHOW_ALERT = "SHOW_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";

const INITIAL_STATE: IAlert = {
  isActive: false,
  title: "",
  subtitle: "",
  message: "",
  buttons: [],
  mode: "ios",
};

export const alertReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, ...action.payload };

    case CLEAR_ALERT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
