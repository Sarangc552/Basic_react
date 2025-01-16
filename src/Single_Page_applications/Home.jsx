import React from "react";
import { Button, Card } from "react-bootstrap";

const Home = () => {
  let a = [
    {
      photo:
        "https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_1280.jpg",
      name: "cat",
    },
    { photo: "https://images.unsplash.com/photo-1562569633-622303bafef5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D", name: "Lion" },
    { photo: "https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg?cs=srgb&dl=pexels-andreas-barth-89047-1131774.jpg&fm=jpg", name: "Eagle" },
    { photo: "https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Squrell" },
    { photo: "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Horse" },
    { photo: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Totoyis" },
    { photo: "https://images.pexels.com/photos/3850526/pexels-photo-3850526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Elephant" },
    { photo: "https://images.pexels.com/photos/4587992/pexels-photo-4587992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Dog" },
  ];

  return (
    <div>
        <h1 style={{textAlign:"center",color:"darkgreen",fontSize:"50px"}}>Gallery</h1>
      {a.map((test) => {
        return (
          <div style={{textAlign:"center",display:"inline-flex",margin:"40px"}}>
            <Card style={{ width: "18rem" }}>
              <img src={test.photo} height={"300px"}></img>
              <Card.Body>
                <Card.Title>{test.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">CLICK</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
