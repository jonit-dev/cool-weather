import './theme/variables.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { Menu } from './components/global/Menu/Menu';
import { ShowAlert } from './components/global/ShowAlert/ShowAlert';
import { ShowLoading } from './components/global/ShowLoading/ShowLoading';
import { ThingsToDo } from './pages/ThingsToDo';
import { WeatherPage } from './pages/Weather';
import { toggleLoading } from './store/actions/loading.action';
import { loadCurrentWeatherData, loadWeatherForecastData } from './store/actions/weather.action';
import { AppState } from './store/reducers/index.reducers';
import { ICurrentWeatherData } from './store/types/weather.types';

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
const App: React.FC = () => {
  const { city } = useSelector<AppState, ICurrentWeatherData>(
    (state) => state.weatherReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log(`Loading weather data from ${city}`);
      if (city) {
        dispatch(toggleLoading(true, "Loading weather data..."));
        dispatch(loadCurrentWeatherData(city));
        dispatch(loadWeatherForecastData(city));
        dispatch(toggleLoading(false, null));
      }
    })();
  }, [city, dispatch]);

  return (
    <IonApp>
      <ShowLoading />
      <ShowAlert />
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/weather" component={WeatherPage} exact />
            <Route path="/page/things-to-do" component={ThingsToDo} exact />
            <Redirect from="/" to="/page/weather" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
