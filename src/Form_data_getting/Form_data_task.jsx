import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Form_data_task = () => {
  const [name, setname] = useState("");
  const [last, setlast] = useState("");
  const [mob, setmob] = useState("");
  const [email, setemail] = useState("");
  const [passsword, setpass] = useState("");
  const getname = (event) => {
    setname(event.target.value);
  };
  const getlast = (event) => {
    setlast(event.target.value);
  };
  const getmob = (event) => {
    setmob(event.target.value);
  };
  const getemail = (event) => {
    setemail(event.target.value);
  };
  const getpass = (event) => {
    setpass(event.target.value);
  };
  const [array, setarray] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setarray({ name, last, mob, email, passsword });
  };
  console.log(array);

  return (
    <div>
      <h2 className="text-center m-5">Contact Form</h2>
      <Form className="w-50 m-auto" onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={getname}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter LastName"
            onChange={getlast}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your Mobile no"
            onChange={getmob}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={getemail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={getpass}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Form_data_task;
