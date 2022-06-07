import {
  Typography,
  IconButton,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { addProductToCart,deleteProductToCart } from "../../utils/userService";

const CartItem = ({ product }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {product.title}
          </Typography>
          <Typography variant="h5" color="red" component="div">
            {product.price * product.count}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            {`${product.price} x  ${product.count}`}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <Add onClick={()=> addProductToCart(product)} />
          </IconButton>
          <IconButton aria-label="next">
            <Add   onClick = {()=> deleteProductToCart(product)}/>
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={product.image}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default CartItem;
