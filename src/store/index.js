import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../api/postApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
})

setupListeners(store.dispatch)

export default store