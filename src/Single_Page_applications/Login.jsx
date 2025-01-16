import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const Login = () => {
  return (
    <div className='m-5'>
        <h1 className='text-center mb-5'>Login Form</h1>
         <Form className='w-50 m-auto p-5' style={{border:"1px solid black",borderRadius:"20px",backgroundColor:"lightgray",border:"0px"}}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <button style={{width:"200px",padding:"5px",color:'whitesmoke',backgroundColor:"green",borderRadius:"10px",border:"0px",margin:"20px 230px"}}>ENTER</button>
    </Form>
    </div>
  )
}

export default Login