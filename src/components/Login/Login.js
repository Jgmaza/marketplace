import React, {useState}  from 'react'
import { Grid, Paper, TextField, Button, Typography, Link, Alert} from '@mui/material'


const Login = () => {
    const [userlog, setNamelog] = useState('');
    const [passlog, setPasslog] = useState('');
    const [flag, setFlag] = useState(false);

    function handleSubmit (e){
        e.preventDefault()
        let usuarios = localStorage.getItem('usuarios');
        usuarios =JSON.parse(usuarios)
        if(!usuarios){
            setFlag(true);
            console.log('EMPTY')
        }else{
            
            if(existeUsuario(usuarios)==false){
                setFlag(true)   
            }else{
                setFlag(false)
            }
        } 
    }

    function existeUsuario(usuarios){
        let enc = false;
        if(usuarios!=null){
            usuarios.forEach((element) => {
                if (element.user==userlog ){
                    if (element.pass==passlog){
                        alert('Inicio sesión correctamente')
                        window.localStorage.setItem('USER', JSON.stringify(element))
                        enc = true;
                    }else{
                        alert('Contraseña incorrecta')
                        enc = false;
                    }
                }
            });
        }
        
        return enc;           
    }

    let btnStyle = { margin: '20px 0', background: '#e94560' };
    let formLabels={margin:'10px 0px'}
    return (
        <Grid>
            <Paper elevation={10} style={{ padding: '20px 30px', width: '300px', margin: '20px auto' }}>
                <Grid align='center'>
                    <h1 style={{margin:4}}>Bienvenido</h1>
                    <Typography fontSize={12}> Ingresa con tu usuario y contraseña </Typography>

                    <form onSubmit={handleSubmit}>
                        <h4 style={formLabels} align='left'>Usuario</h4>
                        <TextField id='login-form-user' value={userlog} variant='outlined' 
                        onChange={(event)=> setNamelog(event.target.value)}fullWidth required/>
                        
                        <h4 style={formLabels} align='left'>Contraseña</h4>
                        <TextField id='login-form-pass' value={passlog} variant='outlined' type='password' 
                        onChange={(event)=> setPasslog(event.target.value)} fullWidth required/>
                        
                        <Button style={btnStyle} type='submit' variant='contained' fullWidth>Login</Button>
                        
                        {flag && (<Alert style={{margin:'10px 0px', fontSize:'12px'}} severity="error"> Datos de ingreso incorrectos </Alert>)}                       
                        
                        <Typography fontSize={12}>
                            ¿No tienes una cuenta? {' '}
                            <Link href='register'>Registrarse</Link>
                        </Typography>
                        
            

                    </form>

                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login