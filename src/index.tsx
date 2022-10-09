import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/ReduxStore";
import { Provider } from "./redux/StoreContext";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App appState={store.getState()} store={store} />
    </Provider>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
