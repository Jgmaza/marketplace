import React, { useEffect, useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { MenuIcon, ShoppingCart } from "@mui/icons-material";
import CartItem from "../CartItem";
import { detectActualUser } from "../../utils/userService";

const Cart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const actualUser = detectActualUser()["products"];
    setProducts([...actualUser,products]);
  }, []);

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(prev =>!prev)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Shopping Cart
            <ShoppingCart />
          </Typography>
        </Box>
        {products.map((prod) => <CartItem product={prod} key={prod.image}/>)}
      </Drawer>
    </>
  );
};

export default Cart;
