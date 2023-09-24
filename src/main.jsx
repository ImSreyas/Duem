import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { configureStore } from "@reduxjs/toolkit";
import options from "./store/options";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    options,
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
