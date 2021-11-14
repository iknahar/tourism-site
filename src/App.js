import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Naviagation from './Pages/Shared/Navigation/Navigation';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Footer from './Pages/Shared/Footer/Footer';
import Details from './Pages/Details/Details';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
AOS.init();

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Naviagation></Naviagation>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/products/:productId">
            <Details></Details>
          </PrivateRoute>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
