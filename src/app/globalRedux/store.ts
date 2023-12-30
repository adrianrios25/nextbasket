import { configureStore, combineReducers } from "@reduxjs/toolkit";
import persistStore from "redux-persist/lib/persistStore";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  productsSlice  from "./Features/productsSlice";
import { cartReducer } from "./Features/cartSlice";
import { wishlistReducer } from "./Features/wishlistSlice";
const rootReducer = combineReducers({
    products: productsSlice,
    cart: cartReducer,
    wishlist: wishlistReducer
})

const authPersistConfig = {
    key: "root",
    storage,
    version: 1,
    whitelist: [ "cart", "wishlist"]
}

export const store = configureStore({
    reducer: persistReducer(authPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/REHYDRATE", "persist/PERSIST"]
        }
    }),
    devTools: true
})

export const persistor = persistStore(store, {}, () => {
    persistor.persist()
})

export type  RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;