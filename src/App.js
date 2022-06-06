import Registration from "./components/Login/Registration"
import Login from "./components/Login/Login"

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

        <Login/>
        <Registration/>
        
      </Typography>
    </ThemeProvider>
      
    </>
  );
}

export default App;
