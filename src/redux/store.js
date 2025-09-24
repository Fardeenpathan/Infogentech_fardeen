import { configureStore } from '@reduxjs/toolkit';
import countryCodeReducer from './countryCodeSlice';

const store = configureStore({
  reducer: {
    countryCode: countryCodeReducer,
  },
});

export default store;
