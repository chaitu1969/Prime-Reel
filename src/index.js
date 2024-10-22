import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./utils/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ErrorBoundary fallback={<ErrorPage />}>
    <App />
  </ErrorBoundary>,
  // </React.StrictMode>
);
