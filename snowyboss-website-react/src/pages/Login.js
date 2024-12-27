import React from 'react';
import './Login.css';
import {auth, provider} from '../firebase-config.js';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/Sn0wyB0ss-Website/Blog");
        });
    };


    return(
        <div class="login">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );

}

export default Login;