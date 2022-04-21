import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { useGlobalContext } from "./context";
import SingleCoinPage from "./Pages/SingleCoinPage/SingleCoinPage";
function App() {
  const { dark } = useGlobalContext();
  const theme = createTheme({
    palette: {
      primary: {
        main: dark ? "#fff" : "#222",
      },
      secondary: {
        main: dark ? "#222" : "#fff",
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
      type: dark ? "dark" : "light",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/coin/:id" element={<SingleCoinPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
