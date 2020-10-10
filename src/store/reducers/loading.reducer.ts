import { ILoadingData } from '../types/loading.types';

export const SHOW_LOADING = "SHOW_LOADING";
export const CLEAR_LOADING = "CLEAR_LOADING";

const INITIAL_STATE: ILoadingData = {
  isActive: false,
  message: null,
};

export const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, ...action.payload };

    case CLEAR_LOADING: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
