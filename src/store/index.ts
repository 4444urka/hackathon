import { configureStore } from "@reduxjs/toolkit";
import responseHistoryReducer from  "./slices/responseHistorySlice";


export const store = configureStore({
    reducer: {
        responseHistory: responseHistoryReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState  = ReturnType<typeof store.getState>;