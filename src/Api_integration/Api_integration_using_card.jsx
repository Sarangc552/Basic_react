import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";

const Api_integration_using_card = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/search?q=phone")
      .then((response) => setproduct(response.data.products));
  }, []);
  console.log(product);

  return (
    <div className="row m-5">
      {product.map((test, index) => {
        return (
          <Card style={{ width: "20rem", textAlign: "center", margin: "10px" }}>
            <Card.Img
              variant="top"
              src={test.images[0]}
              style={{ height: "250px",padding:"10px" }}
            />
            <Card.Body>
              <Card.Title>{test.title}</Card.Title>
              <Card.Text>{test.description}</Card.Text>
              <Card.Text>ratting:{test.rating}</Card.Text>
              <Card.Text>
                <Rating name="size-medium" defaultValue={test.rating} className={test.rating>4.5?"text-success":""}/>
              </Card.Text>
              <Card.Title>${test.price}</Card.Title>

              <Card.Text>Stock:{test.stock}</Card.Text>

              <Button variant="primary" className="w-50">
                Buy
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Api_integration_using_card;
