import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Mapping_Task3(sample) {
  console.log(sample);
  
  let container = [
    {
      Image:
        "https://images.pexels.com/photos/236230/pexels-photo-236230.jpeg?cs=srgb&dl=adorable-animals-cats-236230.jpg&fm=jpg",
      name: "CAT",
    },
    {
      Image:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/scar-the-lion-richard-ulanowski.jpg",
      name: "LION",
    },
    {
      Image:
        "https://wallup.net/wp-content/uploads/2016/01/185765-fox-animals-wildlife.jpg",
      name: "Fox",
    },
    {
      Image: "https://sonofchina.com/wp-content/uploads/2023/03/bears.jpg",
      name: "BEAR",
    },
  ];
  return (
    
    <Carousel>
      {sample.test}
      {sample.number}
      {container.map((text) => {
        return (
          <Carousel.Item>
            <img
              src={text.Image}
              alt=""
              style={{ width: "100%", height: "100vh" }}
            />
            <Carousel.Caption>
              <h1 style={{ fontSize: "50px", color: "whitesmoke" }}>
                {text.name}
                
              </h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              {sample.number}
              {sample.example}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Mapping_Task3;
