import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { configureStore } from "@reduxjs/toolkit";
import options from "./store/options";
import collection from "./store/collection.js";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    options,
    collection
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
