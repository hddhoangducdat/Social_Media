import React from "react";
import ReactDOM from "react-dom";
// react-redux and middleware
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
// react-persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Reducers and App layout
import reducers from "./reducers";
import App from "./layouts/App";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage
  },
  reducers
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
