import React from "react";
import Home from "./components/Items/Home";

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
          
        </Routes>
        
        
      </Typography>
    </ThemeProvider>  

    </>
  );
}

export default App;
