import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import MainNavigator from "./route";
import rootSaga from "./sagas/rootSaga";
import allReducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);
