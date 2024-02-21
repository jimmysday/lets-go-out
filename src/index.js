import React from "react";
import ReactDOM from "react-dom";
//import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import App from "./App";

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
