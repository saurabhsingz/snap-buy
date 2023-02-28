import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Typography, Button, Grid, Divider, Box } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const CartDetails = () => {
  const [counter, setCounter] = useState(() => {
    return [];
  });

  const [totalPrice, setPrice] = useState(() => {
    return 0;
  });

  const checkPrice = () => {
    setPrice(0);
    for (let i = 0; i < counter.length; i++) {
      setPrice((prevPrice) => prevPrice + counter[i].totalCost);
    }
  };

  useEffect(() => {
    setCounter(JSON.parse(localStorage.getItem("items")));
  }, []);

  useEffect(() => {
    checkPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const handleAllBuy = () => {
    if(counter.length===0){
      alert("No Items in Your Cart!");
    }else{
      alert("You Succussfully Bought All Items");
      handleReset(); 
    }
  };

  const handleReset = () => {
    if(counter.length===0){
      alert("No Items in Your Cart!");
    }else{
      localStorage.clear();
      localStorage.setItem("items", JSON.stringify([]));
      setCounter([]);
    }
  };

  const handleIncrement = (data) => {
    const counters = [...counter];
    const index = counter.indexOf(data);
    counters[index] = { ...data };
    counters[index].value++;
    counters[index].totalCost += counters[index].cost;
    setCounter(counters);
    localStorage.setItem("items", JSON.stringify(counters));
  };

  const handleDecrement = (data) => {
    const counters = [...counter];
    const index = counter.indexOf(data);
    counters[index] = { ...data };
    counters[index].value--;
    if (counters[index].value === 0) {
      handleDelete(counters[index].id);
    } else {
      counters[index].totalCost -= counters[index].cost;
      setCounter(counters);
      localStorage.setItem("items", JSON.stringify(counters));
    }
  };

  const handleDelete = (indx) => {
    const counters = counter.filter((c) => c.id !== indx);
    setCounter(counters);
    localStorage.setItem("items", JSON.stringify(counters));
  };

  const handleBuy = (indx) => {
    alert("You have Successfully Bought the Item");
    handleDelete(indx);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        sx={{mb:8,pt:5}}
      >
        {counter.map((counter) => (
          <Grid item key={counter.id}>
            <CartItem
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
              onBuy={handleBuy}
              counter={counter}
            />
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: "3px",
                marginLeft: "12%",
                marginRight: "12%",
              }}
            />
          </Grid>
        ))}
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 2 }}
            spacing={5}
          >
            <Grid item>
              <Button
                variant="text"
                sx={{ color: "green" }}
                disableRipple
                disableElevation
                disableTouchRipple
              >
                <Typography variant="h6" sx={{ color: "black" }}>
                  Total Cost :
                </Typography>
                <AttachMoneyIcon />
                <Typography variant="h6" sx={{ color: "green" }}>
                  {totalPrice}
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
              >
                <Grid item>
                  <Button
                    size="large"
                    sx={{ bgcolor: "#8874a3" }}
                    variant="contained"
                    onClick={() => handleAllBuy()}
                  >
                    Buy All
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ bgcolor: "#568299" }}
                    onClick={() => handleReset()}
                  >
                    Remove All
                    <RemoveShoppingCartIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default CartDetails;
