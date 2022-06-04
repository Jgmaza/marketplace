import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material'

const Login = () => {

    let btnStyle = { margin: '20px 0', background: '#e94560' };
    let formLabels={margin:'10px 0px'}
    return (
        <Grid>
            <Paper elevation={10} style={{ padding: 20, width: '280px', margin: '20px auto' }}>
                <Grid alignment='center'>
                    <h1 style={{margin:4}}>Bienvenido</h1>
                    <Typography fontSize={12}> Ingresa con tu usuario y contraseña </Typography>

                    <form>
                        <h4 style={formLabels} align='left'>Usuario</h4>
                        <TextField id='login-form-user' variant='outlined' fullWidth required/>
                        <h4 style={formLabels} align='left'>Contraseña</h4>
                        <TextField id='login-form-pass' variant='outlined' type='password' fullWidth required/>
                        <Button style={btnStyle} type='submit' variant='contained' fullWidth>Login</Button>
                        <Typography fontSize={12}>
                            ¿No tienes una cuenta? {' '}
                            <Link href='#'>Registrarse</Link>
                        </Typography>
                    </form>

                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login