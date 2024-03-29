import React from "react";
import { LogBox } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import MainStack from "./route";
import rootSaga from "./sagas/rootSaga";
import allReducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);
