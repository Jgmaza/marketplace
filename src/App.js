import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardProduct from "./components/Items/CardProduct";

function App() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const fecthProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  fecthProducts();
  useEffect(() => {
    fecthProducts();
  }, []);

  return (
    <>
      <Grid container sx={{ width: "70%" }}>
        {!products ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <Grid item xs={3}>
              <CardProduct
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating.rate}
                image={product.image}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default App;
