import React, { useContext } from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   let navLogin = {
     textDecoration: "none",
     color: "#9D9794",
     margin: "0 20px",
   };


   if (loggedInUser.photoURL) {
     navLogin = {
       display: "none",
     };
   }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" className="ps-5">
        <Navbar.Brand as={Link} to="/" className="text-color">
          Travella
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ borderColor: "white" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ps-5">
            <Nav.Link as={Link} to="/about" className="text-color">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="text-color">
              Service
            </Nav.Link>

            <Nav.Link
              style={navLogin}
              as={Link}
              to="/login"
              className="text-color"
            >
              Login
            </Nav.Link>
            {loggedInUser.email && (
              <Nav.Link as={Link} to="/dashboard" className="text-color">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {loggedInUser.isLoggedIn && (
              <img
                style={{
                  borderRadius: "50%",
                  height: "39px",
                  marginLeft: "1vw",
                }}
                src={loggedInUser.photoURL}
                alt="Profile"
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
