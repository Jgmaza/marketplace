import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "../Cart";

function Header() {
  const [user, setUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  function handleLogout() {
    window.localStorage.setItem("user", JSON.stringify(""));
    window.location.href = `${window.location.origin}/login`;
  }

  useEffect(() => {
    let newUSER = JSON.parse(localStorage.getItem("user"));
    setUser({ ...newUSER });
  }, []);
  return (
    <Box position="static" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "White", color: "#e94560" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            MARKETPLACE
          </Typography>
          {isDrawerOpen && <Cart isDrawerOpen={isDrawerOpen} />}
          {user === null ? (
            <>
              <Button
                style={{ margin: "0px 10px" }}
                color="inherit"
                onClick={() => navigate("/register")}
                sx={{ fontWeight: "bold" }}
              >
                Registrarse
              </Button>
              <IconButton
                size="small"
                aria-label="login"
                onClick={() => navigate("/login")}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </>
          ) : (
            <>
              <Typography component={"span"}>
                Bienvenido, {user.name}.
              </Typography>
              <AddShoppingCartIcon  onClick={() => setIsDrawerOpen((prev) => !prev)} />
              <IconButton
                size="small"
                aria-label="logout"
                onClick={() => handleLogout()}
                color="inherit"
                style={{ margin: "0px 10px" }}
              >
                <LogoutIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
