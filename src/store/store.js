import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/userReducer'
// import loaderReducer from '../store/loader'


export const store = configureStore({
  reducer: {
    user: userReducer,
    // loader: loaderReducer,
  },
})