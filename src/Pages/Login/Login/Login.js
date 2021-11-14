import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { Alert, Col, Container, Row, Spinner, Button } from "react-bootstrap";
import bg from '../../../images/27.jpg'


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
  const txbg = {
    // background: "#00000071",
    background: "rgba(0, 0, 0, 0.608)",
    
  };

  return (
    <div style={{
      background: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      minHeight: "100vh",
      marginTop: "-70px"
    }}>
      <Container style={txbg} className='m-auto p-5'>
        <Row className="d-flex align-items-center">
          <Col >
            <h3 data-aos="fade-down" data-aos-duration="1000"  style={{marginTop: "5rem", color: "white"}}>Log In</h3>
            <form onSubmit={handleLoginSubmit}>
              <input
                className="my-3 p-1 w-50"
                id="standard-basic"
                placeholder="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <br />
              <input
                className="my-3 p-1  w-50"
                id="standard-basic"
                placeholder="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />
              <br />
              <Button  className="rounded-pill px-5 btn-grad" type="submit">
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button className="text-warning" variant="link">New User? Please Register</Button>
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
