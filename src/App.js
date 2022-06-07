import React from "react";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

//Routes
import { Routes, Route, Navigate } from "react-router-dom";

//Fonts
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { HomeMax } from "@mui/icons-material";
const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="body1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
