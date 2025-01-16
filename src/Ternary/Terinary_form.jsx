import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as React from "react";
import Switch from "@mui/material/Switch";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
function Terinary_form() {
  const [show, setshow] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setshow((e) => !e);
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: show === true ? "black" : "white",
        color: show === true ? "red" : "black",
      }}
    >
      <h1
        style={{ textAlign: "center", padding: "20px 0px", fontWeight: "bold" }}
      >
        Login page
      </h1>
      <div style={{ textAlign: "center" }}>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        {show === true ? <FaMoon /> : <FaSun />}
      </div>
      <div>
        <Form
          className="w-50 m-auto mt-5"
          style={{
            border: show === true ? "8px solid white" : "8px solid black",
            padding: "30px",
            borderRadius: "30px",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: show === true ? "red" : "black",
                border: "0px",
                width: "180px",
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Terinary_form;
