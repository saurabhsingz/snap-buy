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

  const openCart = (code, title, price, img) => {
    const data = JSON.parse(localStorage.getItem("items"));
    console.log(data);
    const hasData = data.filter((c) => c.id === code);
    if (hasData.length === 0) {
      const item = {
        id: code,
        name: title,
        cost: parseInt(price),
        totalCost: parseInt(price),
        image: img,
        value: parseInt(1),
      };
      data.push(item);
      localStorage.setItem("items", JSON.stringify(data));
      navigate("/Cart");
    } else {
      alert("Item already existes in cart");
      navigate("/Cart");
    }
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
          <Button variant="text" size="small" disableRipple>
              <AttachMoneyIcon />
              <Typography variant="h6">{props.data.price}</Typography>
            </Button>
        </CardContent>
        <CardActions>
          <Box sx={{ flexGrow: 1}}>
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
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                openCart(props.data.id,props.data.title,props.data.price,props.data.image);
              }}            
            >
              Add to Cart
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
