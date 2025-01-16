import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
///using spread operator
const Form_data_using_spreadoperator = () => {
  const [first, setfirst] = useState({
    name: "",
    lastname: "",
    mobilenumber: "",
    email: "",
    password: "",
  });
  const getInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setfirst({ ...first, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(first);
  };

  return (
    <div>
      <div>
        <h2 className="text-center m-5">Contact Form</h2>
        <Form className="w-50 m-auto" onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={getInput}
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter LastName"
              onChange={getInput}
              name="lastname"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your Mobile no"
              onChange={getInput}
              name="mobilenumber"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={getInput}
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={getInput}
              name="password"
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Form_data_using_spreadoperator;
