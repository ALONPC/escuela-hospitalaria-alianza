import "./App.css";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { mergeClasses, ThemeProvider } from "@material-ui/styles";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Welcome } from "./components/Views/Welcome";

const theme = createTheme({
  root: {
    maxWidth: 1920,
    minHeight: "100vh",
    overflowX: "hidden",
  },
  typography: {
    fontFamily: "Cabin, sans-serif",
    button: {
      textTransform: "none",
    },
    h4: {
      color: "#434343",
    },
  },
  palette: {
    primary: {
      main: "hsla(221, 91%, 59%, 1)",
      //  contrastText: "#fff"
    },
  },
  // spacing: [8, 16, 24, 48, 64],
});

function App() {
  return (
    <>
      <CssBaseline />
      <div style={theme.root}>
        <ThemeProvider theme={theme}>
          <Router>
            <Header></Header>
            <Content>
              <Switch>
                <Route path="/" component={Welcome}></Route>
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
