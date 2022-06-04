import React, {useState} from 'react';
import { Grid, Paper, TextField, Button, Typography, Link, FormControlLabel, Checkbox, Alert} from '@mui/material'

const Registration = () => {

    const [user, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [flag, setFlag] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        if(!user || !mail || !pass){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem('Usuarios', JSON.stringify({user, mail, pass}))

        }
    }

    let btnStyle = { margin: '20px 0', background: '#e94560' };
    let formLabels={margin:'10px 0px'}
    return (
        <Grid>
            <Paper elevation={10} style={{ padding: '20px 30px', width: '280px', margin: '20px auto' }}>
                <Grid alignment='center'>
                    <h2 style={{margin:2}}>Registro</h2>
                    <Typography fontSize={11}> Llena todos los campos para continuar </Typography>

                    <form onSubmit={handleSubmit}>
                        <h5 style={formLabels} align='left'>Usuario</h5>
                        <TextField id='register-form-user' variant='outlined' fullWidth  
                        onChange={(event)=> setName(event.target.value)}/>
                        
                        <h5 style={formLabels} align='left'>Correo</h5>
                        <TextField id='register-form-mail' variant='outlined' type='email' fullWidth required
                        onChange={(event)=> setMail(event.target.value)}/>
                        
                        <h5 style={formLabels} align='left'>Contraseña</h5>
                        <TextField id='register-form-pass' variant='outlined' type='password' fullWidth required
                        onChange={(event)=> setPass(event.target.value)}/>
        

                        <FormControlLabel 
                            style={{margin:'0px'}}
                            control={<Checkbox name='checkedA'/>} 
                            label={<Typography fontSize={11}> Acepto los terminos y condiciones </Typography>}/>

                        <Button style={btnStyle} type='submit' variant='contained' fullWidth>Registrarse</Button>
                    
                        {flag && (<Alert severity="error">Debe llenar todos los campos!</Alert>)}

                               
                    
                    </form>
                    <Typography fontSize={12}>
                            ¿Ya tienes una cuenta?, {' '}
                            <Link href=''>Ingresa</Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Registration