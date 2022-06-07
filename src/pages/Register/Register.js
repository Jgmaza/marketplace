import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
  Alert,
  Radio,
  RadioGroup,
} from "@mui/material";
import { addUser, detectRepeat } from "../../utils/userService";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
  });
  const [terms, setTerms] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleInputChange = (ev) => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!user.name || !user.mail || !user.password || !terms) {
      setFlag(true);
      setTerms(false);
    } else {
      if (user.length < 2) {
        setFlag(true);
        alert("El usuario debe tener mas 2 o mas caracteres");
      } else {
        if (user.password < 8) {
          setFlag(true);
          alert("La contraseña debe tener 8 o mas caracteres");
        } else {
          if (detectRepeat(user)) {
            alert("El correo ya se encuentra en uso");
            setFlag(true);
          } else {
            setFlag(false);
            addUser(user);
            alert("Se ha registrado correctamente");
            setTerms(false);
          }
        }
      }
    }
  }

  return (
    <Grid>
      <Paper
        elevation={10}
        style={{ padding: "20px 30px", width: "300px", margin: "20px auto" }}
      >
        <Grid align="center">
          <h2 style={{ margin: 2 }}>Registrarse</h2>
          <Typography fontSize={11}>
            {" "}
            Llena todos los campos para continuar{" "}
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* <RadioGroup
                            aria-labelledby="type" defaultValue="buyer" name="type"
                            style={{ display: 'initial' }}
                            onChange={handleInputChange}>
                            <FormControlLabel value="buyer" checked={type === 'buyer'} control={<Radio size='small' />} label={<Typography fontSize={12}> Comprar </Typography>} />
                            <FormControlLabel value="seller" checked={type === 'seller'} control={<Radio size='small' />} label={<Typography fontSize={12}> Vender </Typography>} />
                        </RadioGroup> */}

            <h5 style={{ margin: "10px 0px" }} align="left">
              Usuario
            </h5>
            <TextField
              id="register-form-user"
              variant="outlined"
              placeholder="Debe tener mínimo 2 caracteres"
              name="name"
              fullWidth
              onChange={handleInputChange}
            />

            <h5 style={{ margin: "10px 0px" }} align="left">
              Correo
            </h5>
            <TextField
              id="register-form-mail"
              variant="outlined"
              placeholder="Ej: tucorreo@gmail.com"
              type="email"
              fullWidth
              required
              name="mail"
              onChange={handleInputChange}
            />

            <h5 style={{ margin: "10px 0px" }} align="left">
              Contraseña
            </h5>
            <TextField
              id="register-form-pass"
              variant="outlined"
              placeholder="Debe tener mínimo 8 caracteres"
              name="password"
              type="password"
              fullWidth
              required
              onChange={handleInputChange}
            />

            <FormControlLabel
              onChange={(event) => setTerms(event.target.value)}
              style={{ margin: "0px" }}
              control={<Checkbox name="terms" checked={terms} onChange={(ev)=>{setTerms(prevTerms => !prevTerms)}}/>}
              value={terms}
              label={
                <Typography fontSize={11}>
                  {" "}
                  Acepto los terminos y condiciones{" "}
                </Typography>
              }
            />

            <Button
              style={{ margin: "20px 0", background: "#e94560" }}
              type="submit"
              variant="contained"
              fullWidth
            >
              Registrarse
            </Button>

            {flag && (
              <Alert
                style={{ margin: "10px 0px", fontSize: "12px" }}
                severity="error"
              >
                Debe llenar todos los campos correctamente y aceptar los
                terminos y condiciones
              </Alert>
            )}
          </form>
          <Typography fontSize={12}>
            ¿Ya tienes una cuenta?, <Link href="login">Ingresa</Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
