import './fonts/helvetica/helvetica.css';
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
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Menu } from './components/global/Menu/Menu';
import { WeatherPage } from './pages/Weather';

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/weather" component={WeatherPage} exact />
            <Redirect from="/" to="/page/weather" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
