import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { Alert, Container, Spinner, Button, Row, Col } from "react-bootstrap";
import bg from '../../../images/27.jpg'

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const txbg = {
    // background: "#00000071",
    background: "rgba(0, 0, 0, 0.608)",
    
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
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
        <Row>
        <h3 data-aos="fade-up" data-aos-duration="1000"  style={{marginTop: "5rem", color: "white"}}>Register</h3>
          <Col>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="Your Name"
                  name="name"
                  onBlur={handleOnBlur}
                />
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                />
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="ReType Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                />
                <br />
                <Button className="rounded-pill px-5 btn-grad" type="submit">
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button className="text-warning" variant="link">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <Spinner animation="grow" />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default Register;
