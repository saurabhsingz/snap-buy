import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Description.css";
import { Typography, Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const ProductDetails = () => {
  const navigate = useNavigate();

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
  let params = useParams();
  const [value, setValue] = React.useState(-1);
  const [hover, setHover] = React.useState(-1);
  const [post, setPost] = useState(() => {
    return [];
  });

  const baseURL = "https://fakestoreapi.com/products/" + params.id;

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
    getData();
    const name = params.id.toString();
    const rate = localStorage.getItem(name);
    setValue(parseInt(rate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!post) return null;

  return (
    <React.Fragment>
      <Navbar />
      <div className="details">
        <div className="big-img">
          <img src={post.image}  width="100%" alt={post.title}/>
        </div>

        <div className="box">
          <div className="row">
            <h3>{post.title}</h3>
            <Button varaint="text" size="large" sx={{ flexGrow: 1 , pr:5}}>
              <AttachMoneyIcon />
              {post.price}
            </Button>
          </div>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            sx={{ pl:2 }}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              const name = params.id.toString();
              const rate = localStorage.getItem(name);
              console.log(rate);
              if (rate === null || rate === "-1") {
                localStorage.setItem(name, newValue);
                setValue(newValue);
              } else {
                localStorage.removeItem(name);
                localStorage.setItem(name, newValue);
                setValue(newValue);
              }
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box>{labels[hover !== -1 ? hover : value]}</Box>
          )}
          <Typography variant="h5" sx={{ display: "inline", pl:2 }}>
            Type:{" "}
          </Typography>
          <Typography variant="h6" sx={{ display: "inline"}}>
            {post.category}
          </Typography>

          <Typography variant="body2" sx={{ pl:1 }}>{post.description}</Typography>
          <button
            className="cart"
            onClick={() => {
              openCart(post.id, post.title, post.price, post.image);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetails;
