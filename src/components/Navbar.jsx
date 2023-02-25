import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = (props) => {
  const navigate = useNavigate();

  const openHome = () => {
    navigate("/");
  };

  const clickOnCart = () => {
    navigate("/cart");
  };

  const clickOnAbout = () => {
    navigate("/about");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#fe745c" }}>
        <Toolbar>
          <ShoppingCartOutlinedIcon sx={{ color: "#ffffff", mr: 1 }} />
          <Typography
            variant="h6"
            align="left"
            component="h1"
            sx={{ flexGrow: 1 }}
          >
            <Button
              variant="text"
              size="large"
              sx={{ flexGrow: 1, color: "#ffff" }}
              onClick={() => {
                openHome();
              }}
            >
              Snap-Buy
            </Button>
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "#ffff", color: "black" }}
            onClick={() => {
              clickOnAbout();
            }}
          >
            About
          </Button>
          <Button
            variant="icon"
            size="small"
            onClick={() => {
              clickOnCart();
            }}
          >
            <ShoppingBagIcon sx={{ color: "#ffffff" }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
