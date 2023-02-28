import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "./ProductComp/Product";
import { Grid, Box, Container } from "@mui/material";
import "./Products.css";

const Products = () => {
  const [post, setPost] = useState(() => {
    return [];
  });

  const [counter, setCounter] = useState(() => {
    return [];
  });

  const [search, setSearch] = useState(() => {
    return "";
  });

  const [isOnline,setIsOnline] = useState(window.navigator.onLine);

  const navigate = useNavigate()
  const baseURL = "https://fakestoreapi.com/products?limit=20";

  const getData = async () => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify(counter));
      setCounter(counter);
    } else {
      setCounter(JSON.parse(localStorage.getItem("items")));
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    if(isOnline===false){
      navigate("*");
    }
  },[isOnline])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const newPost = post.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!post) return null;

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <div className="product-search">
          {/* <h1 className="product-test">Search Products</h1> */}
          <form>
            <input
              type="text"
              placeholder="Search Products"
              className="product-input"
              onChange={handleChange}
            />
          </form>
        </div>
      </Box>
      <Container sx={{ py: 4 }} maxWidth="md">
        {/* End hero unit */}
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          sx={{ pb: 6}}
        >
          {newPost.map((data) => (
            <Product key={data.id} data={data} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
