import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const ExampleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    multiplication: (state) => {
      state.value = state.value *2;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement,multiplication } = ExampleSlice.actions;

export default ExampleSlice.reducer;
