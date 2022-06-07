
import React from "react";
import Home from "./components/Items/Home";

//Components
import Register from "./components/Login/Register"
import Login from "./components/Login/Login"

//Routes
import {Routes,Route} from 'react-router-dom';

//Fonts
import { createTheme, ThemeProvider, Typography } from '@mui/material';
const theme = createTheme({
  typography: {fontFamily: ["Nunito", "Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(",")}
});





//Routes
import {Routes,Route} from 'react-router-dom';

//Fonts
import { createTheme, ThemeProvider, Typography } from '@mui/material';
const theme = createTheme({
  typography: {fontFamily: ["Nunito", "Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(",")}
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Typography variant="body1">

        <Routes>
          <Route path='' element={<Home/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
        </Routes>
        
        
      </Typography>
    </ThemeProvider>    
    </>
  );
}

export default App;
