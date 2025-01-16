import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Rating from "@mui/material/Rating";

const Api_using_carousel = () => {
  const [array, setarray] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/search?q=phone")
      .then((response) => setarray(response.data.products));
  }, []);
  console.log(array);

  return (
    <div style={{backgroundColor:"black",height:"500px"}}>
      <Carousel>
        {array.map((test, index) => {
          return (
            <Carousel.Item>
                <div style={{textAlign:"center"}}>
                <img src={test.images[0]} alt="" height={400} className="p-5"/>
                </div>
              
              <Carousel.Caption>
                <div>
                <h2>{test.title}</h2>
                <Rating name="size-medium" defaultValue={test.rating} className={test.rating>4.5?"text-success":"text-danger"}/>
                <p>
                  {test.description}
                </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Api_using_carousel;
