import { createStore, combineReducers } from 'redux';
import { qReducer } from './qReducer';
import { userReducer } from '../Auth/userReducer';

const store = createStore(
  combineReducers({
    qState: qReducer,
    userState: userReducer
  })
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
