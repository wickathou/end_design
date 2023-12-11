import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => fetch('http://127.0.0.1:3000/greetings/index')
  .then((response) => response.json()).then((data) => data.text));

const initialState = {
  text: 'Generate a greeting!',
  loading: false,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.loading = false;
      state.text = action.payload;
    });
    builder.addCase(fetchGreeting.rejected, (state) => {
      state.loading = false;
      state.text = 'Error found, try again';
    });
  },
});

export const greetingText = (state) => state.greeting.text;
export const greetingLoading = (state) => state.greeting.loading;

export default greetingSlice.reducer;
