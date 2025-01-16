import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Api_integration1 = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setproduct(response.data.products));
  }, []);
  console.log(product);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>index</th>
            <th>Tittle</th>
            <th>Category</th>
            <th>description</th>
            <th>Stock</th>
            <th>price</th>
            <th>shipping information</th>
            <th>warrantyInformation</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>{item.shippingInformation}</td>
                <td>{item.warrantyInformation}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Api_integration1;
