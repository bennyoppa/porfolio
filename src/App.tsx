import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Temp from "./pages/Temp/Temp";

import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      padding: "5% 10%",
      backgroundColor: "#DC7F8E",
    },
    appContainer: {
      borderRadius: 40,
      padding: "16px 50px",
      backgroundColor: "white",
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.appContainer}>
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
    </div>
  );
}

export default App;
