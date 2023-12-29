import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  productsSlice  from "./Features/productsSlice";
const rootReducer = combineReducers({
    products: productsSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export type  RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;