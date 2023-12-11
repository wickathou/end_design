import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingSlice';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const setupStore = (preloadedState) => configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default setupStore;
