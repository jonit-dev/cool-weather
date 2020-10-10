import { globalEnv } from '../../constants/global.config';
import { GooglePlacesAPIHelper } from '../../libs/Request/GooglePlacesAPIHelper';
import { LOAD_PLACES } from '../reducers/places.reducer';
import { IPlaceData } from '../types/places.types';

export const loadPlaces = (city: string, lat: number, lng: number) => async (
  dispatch
) => {
  const googlePlacesApi = new GooglePlacesAPIHelper();

  const { data } = await googlePlacesApi.googlePlacesRequest(
    "GET",
    `json?location=${lat},${lng}&radius=20000&keyword=${encodeURI(
      "things to do in " + city
    )}&rankby=prominence&key=${globalEnv.googlePlacesAPIKey}`
  );

  const places: IPlaceData = data.results.map((item) => {
    return {
      name: item.name,
      location: item.geometry.location,
      address: item.vicinity,
      photoReference: item.photos[0].photo_reference,
    };
  });
  console.log(places);

  dispatch({ type: LOAD_PLACES, payload: places });
};
