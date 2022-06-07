import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { loginUser, setLoguinUser } from "../../utils/userService";
const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [flag, setFlag] = useState(false);

  const handleInputChange = (ev) => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const isUser = loginUser(user);

    if (isUser) {
        setLoguinUser(isUser);
      window.location.href=`${window.location.origin}/home`
      setFlag(false);
    } else {
    alert("Contraseña incorrecta o Usuario");
      setFlag(true);
    }
  }



  let btnStyle = { margin: "20px 0", background: "#e94560" };
  let formLabels = { margin: "10px 0px" };
  return (
    <Grid>
      <Paper
        elevation={10}
        style={{ padding: "20px 30px", width: "300px", margin: "20px auto" }}
      >
        <Grid align="center">
          <h1 style={{ margin: 4 }}>Bienvenido</h1>
          <Typography fontSize={12}>
            {" "}
            Ingresa con tu usuario y contraseña{" "}
          </Typography>

          <form onSubmit={handleSubmit}>
            <h4 style={formLabels} align="left">
              Usuario
            </h4>
            <TextField
              id="login-form-user"
              name="name"
              variant="outlined"
              onChange={handleInputChange}
              fullWidth
              required
            />

            <h4 style={formLabels} align="left">
              Contraseña
            </h4>
            <TextField
              id="login-form-pass"
              name="password"
              variant="outlined"
              type="password"
              onChange={handleInputChange}
              fullWidth
              required
            />

            <Button
              style={btnStyle}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>

            {flag && (
              <Alert
                style={{ margin: "10px 0px", fontSize: "12px" }}
                severity="error"
              >
                {" "}
                Datos de ingreso incorrectos{" "}
              </Alert>
            )}

            <Typography fontSize={12}>
              ¿No tienes una cuenta? <Link href="register">Registrarse</Link>
            </Typography>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
