import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Naviagation = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 20px",
    
  };

  const bg = {
    background: "#00000071",
  }

  const activeSty = {
    color: "white",
    fontWeight: "bold",
  };

  const { user, logout } = useAuth();
  return (
    <div className="container-fluid header d-flex align-items-center m-5 bg-transparent justify-content-between mb-2">
      <Navbar style={bg} className="px-5 py-2" expand="lg" fixed="top">
        <Navbar.Brand className="text-white cursive-font"><b>Travella</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto align-items-center">
            <NavLink style={navStyle} activeStyle={activeSty} to="/home">
              Home
            </NavLink>

            {user?.email ? (
              <span>
                
                <Button className="rounded-pill px-5 btn-grad" onClick={logout}>Logout</Button>
              </span>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button className="rounded-pill px-5 btn-grad">Login</Button>
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
