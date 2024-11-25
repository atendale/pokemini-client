import React, { useState, useContext } from "react"; 
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthenticationContext"; 

function Login() {
    const { login } = useContext(AuthContext); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const handleLogin = async () => {
        try {
            const res = await fetch("http://localhost:3000/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (res.ok) {
                login(data.token, data.user);  
                setLoginMessage(`Login Successful! Welcome, ${data.user.username}`);
                setUsername("");
                setPassword("");
            } else {
                setLoginMessage(data.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            setLoginMessage("Login Error");
        }
    };

    return (
        <div id="login">
            {loginMessage && <p>{loginMessage}</p>}
            <label htmlFor="usernameField">Username: </label>
            <input
                type="text"
                id="usernameField"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="passwordField">Password: </label>
            <input
                type="password"
                id="passwordField"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button id="logIn" onClick={handleLogin}>Log In</button>
            <br />
            <Link to="/">Back to Home</Link>
            <br/>
            <Link to="/roll">Roll for Pokemon!</Link>
        </div>
    );
}

export default Login;