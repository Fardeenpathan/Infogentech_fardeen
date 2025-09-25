import { createSlice } from '@reduxjs/toolkit';

const countryCodeSlice = createSlice({
  name: 'countryCode',
  initialState: {
    value: null,
  },
  reducers: {
    setCountryCode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCountryCode } = countryCodeSlice.actions;

export default countryCodeSlice.reducer;
