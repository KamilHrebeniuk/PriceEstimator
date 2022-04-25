import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";

export function App() {
  // return <BrowserRouter>
  //     <HomePage/>
  // </BrowserRouter>

  return <HomePage />;
}

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
