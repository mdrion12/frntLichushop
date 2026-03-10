import React, { useState } from 'react';
import { useauth } from './AuthContext';
import "./Login.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()
    const { login } = useauth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://lichushop-1.onrender.com/login/',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
            const data = await res.json()
            if (res.ok) {
                console.log(data)
                login();
                alert("Login Successful");
                localStorage.setItem("access", data.access_token);
                localStorage.setItem("refresh", data.refresh_token);
                navigate("/dashboard");

            }
            else {
                alert("Invalid login");
            }
        } catch (e) {
            console.log(e)

        }
    };

    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit}>

                <h2 className="login-title">Login</h2>

                <input
                    className="login-input"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login-button" type="submit">
                    Login
                </button>

            </form>

        </div>
    );
};

export default Login;