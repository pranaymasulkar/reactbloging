import React, { useState } from "react";
import { Col, Container, Row, Form, Card, Button } from "react-bootstrap";

const SignUpInitialValues = {
  name: "",
  email: "",
  pass: "",
};

const Login = () => {
  const [pagetogle, setPagetogle] = useState("login");
  const [signup, setSignup] = useState(SignUpInitialValues);

  const inPutOnchange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handlePageTogle = () => {
    pagetogle === "SignUp" ? setPagetogle("login") : setPagetogle("SignUp");
  };
  return (
    <>
      <section className="d-flex justify-content-center  align-items-center loginpage">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            {pagetogle === "login" ? (
              <Col lg={4} md={6}>
                <Card className="border-0 shadow bg-dark text-white">
                  <Card.Body className="p-5">
                    <h2 className="text-center mb-4">Login</h2>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                      <Button variant="primary" className="w-100 mt-3">
                        Log In
                      </Button>
                      <p className="font-bold text-center my-4"> OR</p>
                      <Button
                        variant="primary"
                        className="w-100"
                        onClick={() => handlePageTogle()}
                      >
                        Sign Up
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              <Col lg={4} md={6}>
                <Card className="border-0 shadow bg-dark text-white">
                  <Card.Body className="p-5">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          onChange={(e) => inPutOnchange(e)}
                          name="name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          onChange={(e) => inPutOnchange(e)}
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          onChange={(e) => inPutOnchange(e)}
                          name="pass"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Conform Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Re-Enter Conform"
                          onChange={(e) => inPutOnchange(e)}
                          name="cpass"
                        />
                      </Form.Group>
                      <Button variant="primary" className="w-100 mt-3">
                        Sign Up
                      </Button>
                      <p className="font-bold text-center my-4"> OR</p>
                      <Button
                        variant="primary"
                        className="w-100"
                        onClick={() => handlePageTogle()}
                      >
                        Log In
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
