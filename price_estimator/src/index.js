import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import Popup from "reactjs-popup";
import { ModalProvider } from "react-simple-hook-modal";

export function App() {
  // return <BrowserRouter>
  //     <HomePage/>
  // </BrowserRouter>

  return <HomePage />;
}

// ReactDOM.render(
//   // <Provider store={store}>
//     <ModalProvider>
//       <App />
//     </ModalProvider>,
//   // </Provider>,
//   document.getElementById("root")
//
// )

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
