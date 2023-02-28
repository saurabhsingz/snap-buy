import React from "react";
import { IconButton, Grid, Typography, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";

const CartItem = (props) => {
  const navigate = useNavigate();
  const openProduct = (id) => {
    navigate("/ProductDetails/" + id);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <img
          src={props.counter.image}
          alt={props.counter.name}
          width="85"
          height="70"
        />
      </Grid>
      <Grid item>
        <Button 
        sx={{color:"black"}}
        onClick={() => {
          openProduct(props.counter.id);
        }}>
          <Typography variant="h7">{props.counter.name}</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <IconButton onClick={() => props.onIncrement(props.counter)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
          <Grid item>{props.counter.value}</Grid>
          <Grid item>
            <IconButton onClick={() => props.onDecrement(props.counter)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          disableRipple
          disableElevation
          disableTouchRipple
        >
          <AttachMoneyIcon />
          <Typography variant="h6">{props.counter.totalCost}</Typography>
        </Button>
      </Grid>
      <Grid item>
        <IconButton
          sx={{ color: "#ff6f69" }}
          onClick={() => props.onDelete(props.counter.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          sx={{ color: "#54b2a9" }}
          onClick={() => {
            props.onBuy(props.counter.id);
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;
