import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import About from "./Components/About/About";
import AddService from "./Components/AddService/AddService";
import AllBooking from "./Components/AllBooking/AllBooking";
import Book from "./Components/Book/Book";
import Checkout from "./Components/Checkout/Checkout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Service from "./Components/Home/Service/Service";
import Login from "./Components/Login/Login";
import Manage from "./Components/Manage/Manage";
import MyOrder from "./Components/MyOder/MyOrder";
import NavBar from "./Components/NavBar/NavBar";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false
  });

  return (
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <PrivateRoute path="/add-service">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/manage-service">
            <Manage />
          </PrivateRoute>
          <PrivateRoute path="/all-booking">
            <AllBooking />
          </PrivateRoute>
          <PrivateRoute path="/my-booking">
            <MyOrder />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
    </Router>
</UserContext.Provider>
  );
}

export default App;
