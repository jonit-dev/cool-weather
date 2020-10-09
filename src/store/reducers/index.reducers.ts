import { combineReducers } from 'redux';

import { alertReducer } from './alert.reducer';

/*#############################################################|
|                        REDUCERS
*##############################################################*/

export const rootReducer = combineReducers({
  alertReducer: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
