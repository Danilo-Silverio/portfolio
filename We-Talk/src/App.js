import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./global/GlobalState";
import Router from "./routes/router";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Router />
      </GlobalState>
    </BrowserRouter>
  );
};

export default App;
