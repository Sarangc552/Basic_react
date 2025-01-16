import { configureStore } from '@reduxjs/toolkit'
import  ExampleSlice  from './ExampleSlice'
import  ExampleSlice2  from './ExampleSlice2'


export const store = configureStore({
  reducer: {
    test:ExampleSlice,
    test1:ExampleSlice2,
  },
})