import { createStore } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";

import rootReducer from "./root-reducer";

// const middlewares = [logger];

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
