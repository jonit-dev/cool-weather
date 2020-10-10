import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page } from '../components/global/Page/Page';
import { Place } from '../components/pages/ThingsToDo/Place';
import { globalEnv } from '../constants/global.config';
import { toggleLoading } from '../store/actions/loading.action';
import { loadPlaces } from '../store/actions/places.action';
import { AppState } from '../store/reducers/index.reducers';
import { IPlaces } from '../store/types/places.types';
import { ICurrentWeatherData } from '../store/types/weather.types';

export const ThingsToDo: React.FC = () => {
  const { condition, city, lat, lng } = useSelector<
    AppState,
    ICurrentWeatherData
  >((state) => state.weatherReducer);

  const { places } = useSelector<AppState, IPlaces>(
    (state) => state.placesReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`Loading places data from ${city}`);

    (async () => {
      if (city) {
        dispatch(toggleLoading(true, "Loading things to do..."));
        await dispatch(loadPlaces(city, lat, lng));
        dispatch(toggleLoading(false, null));
      }
    })();
  }, [city, dispatch, lat, lng]);

  const onRenderPlaces = () => {
    return places.map((place) => {
      const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photoReference}&key=${globalEnv.googlePlacesAPIKey}`;

      return (
        <Place
          title={place.name}
          subtitle={place.address}
          imageUrl={imageUrl}
        />
      );
    });
  };

  return (
    <Page>
      <h1>
        Things to do in {city} ({condition}):
      </h1>

      {places && <div className="ion-padding">{onRenderPlaces()}</div>}
    </Page>
  );
};
