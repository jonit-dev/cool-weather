import { IPlaces } from '../types/places.types';

export const LOAD_PLACES = "LOAD_PLACES";
export const CLEAR_PLACES = "CLEAR_PLACES";

const INITIAL_STATE: IPlaces = {
  places: [],
};

export const placesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_PLACES:
      return {
        ...state,
        places: [...action.payload],
      };

    case CLEAR_PLACES: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
