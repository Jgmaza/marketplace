import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Link, FormControlLabel, Checkbox, Alert, Radio, RadioGroup } from '@mui/material'


const Registration = () => {

    const [user, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [type, setType] = useState('buyer');
    const [terms, setTerms] = useState(false);
    const [flag, setFlag] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!user || !mail || !pass || !terms) {
            setFlag(true);
            setTerms(false);
        } else {
            if (user.length < 2) {
                setFlag(true)
                alert('El usuario debe tener mas 2 o mas caracteres')
            
            }else{
                if (pass.length < 8) {
                    setFlag(true)
                    alert('La contraseña debe tener 8 o mas caracteres')
                    
                }else{
                    let usuarios = window.localStorage.getItem('usuarios')
                    if (existeUsuarioCorreo(usuarios) == true) {
                        console.log('entro existe usuario correo')
                        setFlag(true)
                    } else {
                        console.log('entro guuardar')
                        setFlag(false);
                        let usuario = { type, user, mail, pass }

                        if (usuarios == null) {
                            window.localStorage.setItem('usuarios', JSON.stringify([usuario]))
                        } else {
                            usuarios = JSON.parse(usuarios)
                            usuarios.push(usuario)
                            window.localStorage.setItem('usuarios', JSON.stringify(usuarios))
                        }
                        setName('');
                        setMail('');
                        setPass('');
                        setType('buyer');
                        setTerms(false);
                    }
                }
            }

        }
    }

    function existeUsuarioCorreo(usuarios) {
        let enc = false;

        if(usuarios!=null){
            usuarios.forEach((element) => {
                if (element.user == user) {
                    alert('El nombre de usuario ya se encuentra en uso')
                    enc = true;
                }
                if (element.mail == mail) {
                    alert('El correo ya se encuentra en uso ')
                    enc = true;
                }
            });
        }

        return enc;
    }


    return (
        <Grid>
            <Paper elevation={10} style={{ padding: '20px 30px', width: '300px', margin: '20px auto' }}>
                <Grid align='center'>
                    <h2 style={{ margin: 2 }}>Registro</h2>
                    <Typography fontSize={11}> Llena todos los campos para continuar </Typography>

                    <form onSubmit={handleSubmit}>
                        <RadioGroup
                            aria-labelledby="type" defaultValue="buyer" name="type"
                            style={{ display: 'initial' }}
                            onChange={(event) => setType(event.target.value)}>
                            <FormControlLabel value="buyer" checked={type === 'buyer'} control={<Radio size='small' />} label={<Typography fontSize={12}> Comprar </Typography>} />
                            <FormControlLabel value="seller" checked={type === 'seller'} control={<Radio size='small' />} label={<Typography fontSize={12}> Vender </Typography>} />
                        </RadioGroup>

                        <h5 style={{ margin: '10px 0px' }} align='left'>Usuario</h5>
                        <TextField id='register-form-user' variant='outlined' placeholder='Debe tener mínimo 2 caracteres' value={user} fullWidth
                            onChange={(event) => setName(event.target.value)} />

                        <h5 style={{ margin: '10px 0px' }} align='left'>Correo</h5>
                        <TextField id='register-form-mail' variant='outlined' placeholder='Ej: tucorreo@gmail.com' value={mail} type='email' fullWidth required
                            onChange={(event) => setMail(event.target.value)} />

                        <h5 style={{ margin: '10px 0px' }} align='left'>Contraseña</h5>
                        <TextField id='register-form-pass' variant='outlined' placeholder='Debe tener mínimo 8 caracteres' value={pass} type='password' fullWidth required
                            onChange={(event) => setPass(event.target.value)} />


                        <FormControlLabel
                            onChange={(event) => setTerms(event.target.value)}
                            style={{ margin: '0px' }}
                            control={<Checkbox name='terms' checked={terms} />}
                            value={terms}
                            label={<Typography fontSize={11}> Acepto los terminos y condiciones </Typography>} />

                        <Button style={{ margin: '20px 0', background: '#e94560' }} type='submit' variant='contained' fullWidth>Registrarse</Button>

                        {flag && (<Alert style={{ margin: '10px 0px', fontSize: '12px' }} severity="error">Debe llenar todos los campos correctamente y aceptar los terminos y condiciones</Alert>)}

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