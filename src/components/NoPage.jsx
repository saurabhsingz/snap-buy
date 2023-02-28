import React,{useState,useEffect} from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
let logo = require("../Images/404-landing-page-free-vector.jpg");

export default function Error() {
  const [isOnline,setIsOnline] = useState(window.navigator.onLine);
  const Navigate = useNavigate();
  useEffect(() => {
    setIsOnline(navigator.onLine);
    if(isOnline===true){
      Navigate("/");
    }
  },[isOnline])
  const openHome = () => {
    Navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">
            The page you’re looking for doesn’t exist.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              openHome();
            }}
          >
            Back Home
          </Button>
        </Grid>
        <Grid item>
          <img src={logo} alt="" width="100%" />
        </Grid>
      </Grid>
    </Box>
  );
}
