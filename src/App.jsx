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
    overflowX: "hidden",
  },
  typography: {
    fontFamily: "Cabin, sans-serif",
    button: {
      textTransform: "none",
    },
    allVariants: {
      color: "#434343", // affects typography component directly
    },
  },
  palette: {
    primary: {
      light: "#CDEFFD",
      main: "#3673F6",
      //  contrastText: "#fff"
    },
  },
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
