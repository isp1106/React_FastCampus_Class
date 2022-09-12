import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import counterReducer from "./slices/counterSlice";

const logger = createLogger()

const rootReducer = combineReducers({
  counter: counterReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(logger),
})

export default store