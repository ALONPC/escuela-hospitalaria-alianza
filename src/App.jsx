import "./App.css";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Cabin, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "hsla(221, 91%, 59%, 1)",
      //  contrastText: "#fff"
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Header></Header>
            <Content>
              <Switch>
                <Route path="/"></Route>
                <Route path="/about"></Route>
                <Route path="/documents"></Route>
              </Switch>
            </Content>
            <Footer></Footer>
          </Router>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
