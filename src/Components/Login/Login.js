import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
        const {displayName, email, photoURL} = result.user;
        const signedInUser = {displayName, email, photoURL, isLoggedIn: true};
        setLoggedInUser(signedInUser);
        history.replace(from);
    })
    .catch(function(error) {
        // Handle error
      });
    }

    return (
        <div className="mx-auto p-5">
          <Button
            onClick={handleGoogleSignIn}
            variant="primary"
            size="lg"
            block
          >
          Sign In with Google
          </Button>
        </div>
    );
};

export default Login;