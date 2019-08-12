import React from "react";
import { AppRegistry } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import MainNavigator from "./src/route";
import rootSaga from "./src/sagas/rootSaga";
import allReducers from "./src/reducers";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent("sampleApp", () => App);
