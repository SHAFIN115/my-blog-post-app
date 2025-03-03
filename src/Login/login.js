import React from "react";
import "./login.css";

export default function Login({ onSignIn, onRedirectToCognito }) {
    return (
        <div
            className="login-container"
            style={{ backgroundImage: `url("/login_page.jpg")` }}
        >
            <div className="login-box">
                <h2>Login</h2>
                <input type="text" className="input-field" placeholder="Username" />
                <input type="password" className="input-field" placeholder="Password" />
                <button className="login-button" onClick={onSignIn}>Sign in</button>
                <button className="cognito-button" onClick={onRedirectToCognito}>Redirect to Cognito Login</button>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>
        </div>
    );
}
