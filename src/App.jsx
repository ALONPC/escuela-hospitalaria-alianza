import "./App.css";
import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Cabin, sans-serif",
  },
  button: {
    borderRadius: 30,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
