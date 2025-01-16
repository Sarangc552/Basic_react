import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:0,
};

export const ExampleSlice2 = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addition: (state) => {
      state.value = state.value + 1;
    },
    substraction: (state) => {
      state.value = state.value - 1;
    },
    multiplication: (state) => {
      state.value = state.value *2;
    },
    division: (state) => {
        state.value = state.value /2;
      },
  },
});

// Action creators are generated for each case reducer function
export const { addition, substraction,multiplication,division } = ExampleSlice2.actions;

export default ExampleSlice2.reducer;