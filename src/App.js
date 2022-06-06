//Components
import Registration from "./components/Login/Registration"
import Login from "./components/Login/Login"

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
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          
        </Routes>
        
        
      </Typography>
    </ThemeProvider>    
    </>
  );
}

export default App;
