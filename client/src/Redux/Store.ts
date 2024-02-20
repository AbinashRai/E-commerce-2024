import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./API/ProductApi";
import { userAPI } from "./API/ProductApi";
import { userReducer } from "./Reducer/UserReducer";
import { cartReducer } from "./Reducer/CartReducer";
import { orderApi } from "./API/orderAPI";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userReducer.name]: userReducer.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  middleware: (mid) => [
    ...mid(),
    userAPI.middleware,
    productAPI.middleware,
    orderApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
