import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
 
const Footer = (props) => {
  return (
    <Paper
      sx={{
        bgcolor: "#f8f9fa",
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Typography variant="subtitle2">SNAP-BUY</Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. Pvt. Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
