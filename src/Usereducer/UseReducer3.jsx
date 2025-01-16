import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const initialState = {
  email: "",
  password: "",
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT_FORM":
      console.log("Submitted Data:", state);
      return state;
    default:
      return state;
  }
};

const UseReducer3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div className="p-5">
      <div className="m-auto w-50 p-5" style={{ border: "1px solid black" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UseReducer3;
