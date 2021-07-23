import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Temp from "./pages/Temp/Temp";

import "./App.css";

function App() {
  return (
    <div className="app-layer">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/temp">
            <Temp />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
