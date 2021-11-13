import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { Alert, Col, Container, Row, Spinner, Button } from "react-bootstrap";


const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
          <h3><b>Log</b> <span className="text-primary"><b>In</b></span></h3>
            <form onSubmit={handleLoginSubmit}>
              <input
                className="my-3 p-1 w-75"
                id="standard-basic"
                placeholder="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <input
                className="my-3 p-1  w-75"
                id="standard-basic"
                placeholder="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />
              <br />
              <Button className="rounded-pill px-5" type="submit">
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="link">New User? Please Register</Button>
              </NavLink>
              {isLoading && <Spinner animation="grow" />}
              {user?.email && (
                <Alert severity="success">Login successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
