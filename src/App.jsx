import "./App.css";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Welcome } from "./components/Views/Welcome/Welcome";

let theme = createTheme({
  root: {
    maxWidth: 1920,
    overflowX: "hidden",
    minHeight: "100%",
    // minHeight: "100vh", // not sure if 100% or 100vh, look up for this
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
      contrastText: "#fff",
    },
    secondary: {
      main: "#EF9B48",
    },
    tertiary: {
      main: "#FAE589",
    },
  },
  // spacing: [8, 16, 32, 64, 128, 256] // makes double scroll lol
});

theme = responsiveFontSizes(theme); // recommended way to handle responsive font sizes

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
