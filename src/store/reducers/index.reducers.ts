import { combineReducers } from 'redux';

import { alertReducer } from './alert.reducer';
import { loadingReducer } from './loading.reducer';
import { weatherReducer } from './weather.reducer';

/*#############################################################|
|                        REDUCERS
*##############################################################*/

export const rootReducer = combineReducers({
  alertReducer: alertReducer,
  weatherReducer: weatherReducer,
  loadingReducer: loadingReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
