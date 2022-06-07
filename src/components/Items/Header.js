import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


function Header() {
    
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    function handleLogout() {
        window.localStorage.setItem('USER', JSON.stringify(null))
    }

    useEffect(()=>{
        let newUSER = JSON.parse(localStorage.getItem('USER'))
        setUser(newUSER)
    },[user])
    return (
        <Box position='static' sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: 'White', color: '#e94560' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        MARKETPLACE
                    </Typography>

                    {!user ?
                        (<>
                        <Button style={{margin:'0px 10px'}}color="inherit" onClick={() => navigate('/register')} sx={{ fontWeight: 'bold' }}>Registrarse</Button>
                        
                            <IconButton
                                size="small"
                                aria-label="login"
                                onClick={() => navigate('/login')}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>
                            </>) :
                        (<>
                            <Typography>Bienvenido, {user.user}.</Typography>
                            <IconButton
                                size="small"
                                aria-label="logout"
                                onClick={handleLogout}
                                color="inherit"
                                style={{margin: '0px 10px'}}>
                                <LogoutIcon />
                            </IconButton>
                            </>)}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header