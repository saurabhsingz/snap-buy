import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Product = (props) => {
  const navigate = useNavigate();

  const openProduct = (id) => {
    navigate("/ProductDetails/" + id);
  };

  const returnDescription = (data) => {
    if(data.length>200){
      return data.substr(0,200)+"...";
    }else{
      return data;
    }
  };

  const returnName = (data) => {
    if(data.length>60){
      return data.substr(0,60)+"...";
    }else{
      return data;
    }   
  };

  return (
    <Grid item xs={8} sm={6} md={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia>
          <img
            src={props.data.image}
            alt={props.data.title}
            width="170"
            height="130"
          />
        </CardMedia>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" >
            {returnName(props.data.title)}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {returnDescription(props.data.description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ flexGrow: 1 }}>
            <Button variant="text" size="small">
              <AttachMoneyIcon />
              {props.data.price}
            </Button>
            <Button
              variant="outlined"
              color="success"
              size="small"
              onClick={() => {
                openProduct(props.data.id);
              }}
            
            >
              View
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
