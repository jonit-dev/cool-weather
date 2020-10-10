import { SHOW_LOADING } from '../reducers/loading.reducer';

export const toggleLoading = (
  isActive: boolean,
  message: string | null
) => async (dispatch) => {
  dispatch({
    type: SHOW_LOADING,
    payload: {
      isActive,
      message,
    },
  });
};
