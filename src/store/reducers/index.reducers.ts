import { combineReducers } from 'redux';

import { alertReducer } from './alert.reducer';
import { weatherReducer } from './weather.reducer';

/*#############################################################|
|                        REDUCERS
*##############################################################*/

export const rootReducer = combineReducers({
  alertReducer: alertReducer,
  weatherReducer: weatherReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
