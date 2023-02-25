import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
let logo = require("../Images/ecommerce-web-page-concept-illustration_114360-8204.webp");
let desc = require("../Images/desc.jpg");

const About = () => {
  const Navigate = useNavigate();
  const openHome = () => {
    Navigate("/");
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ mx: 5, my: 5}}
    >
      <Typography
        variant="h2"
        fontFamily={"sans-serif"}
        sx={{ fontWeight: "bold" }}
      >
        My Project
      </Typography>
      <img src={logo} width="45%" />
      <img src={desc} width="65%" />
      <Button
        onClick={() => {
          openHome();
        }}
        variant="contained"
        sx={{ mt: 5, bgcolor: "#fe745c" }}
      >
        Back Home
      </Button>
    </Grid>
  );
};

export default About;
