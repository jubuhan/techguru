import { Link, useNavigate  } from "react-router-dom";
import React from 'react';
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "../firebase_setup/firebase";

export default function Home() {
  
const navigate = useNavigate(); 
  const signInUsingGoogle = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
       
        navigate("/create")

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  return (
    <div className="home">
      <div className="slides">
        <div className="first-content">
          <h2>Unleash Your Inner Blogger</h2>
          <button>
            <Link to="explore">EXPLORE</Link>
            <span></span>
          </button>
          <button onClick={signInUsingGoogle}>
            CREATE<span></span>
          </button>
        </div>
      </div>
      <div className="slides">
        <div className="second-content"></div>
      </div>
      
    </div>
  );
}
