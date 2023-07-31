import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PokemonsContainer from "./Components/PokemonsContainer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <PokemonsContainer />
  </React.StrictMode>
);
  