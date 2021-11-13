import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Naviagation = () => {
  const navStyle = {
    textDecoration: "none",
    color: "black",
    margin: "0 20px",
  };

  const bg = {
    background: "rgba(0, 89, 255, 0.445)",
  }

  const activeSty = {
    color: "blue",
    fontWeight: "bold",
  };

  const { user, logout } = useAuth();
  return (
    <div className="container-fluid header d-flex align-items-center m-5 justify-content-between mb-2">
      <Navbar style={bg} className="px-5 py-2" expand="lg" fixed="top">
        <Navbar.Brand className="text-white"><b>Travella</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto align-items-center">
            <NavLink style={navStyle} activeStyle={activeSty} to="/home">
              Home
            </NavLink>

            {user?.email ? (
              <span>
                
                <Button className="rounded-pill px-5" onClick={logout}>Logout</Button>
              </span>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button className="rounded-pill px-5">Login</Button>
              </NavLink>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Naviagation;
