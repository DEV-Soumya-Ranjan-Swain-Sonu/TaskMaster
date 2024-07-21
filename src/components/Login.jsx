import { useState } from "react";
import './styles.css';
import Logo from "../Img/Logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin() {
        // Retrieve existing user data from localStorage
        const existingData = localStorage.getItem('UserDetails');
        const userDetailsArray = existingData ? JSON.parse(existingData) : [];

        // Check if user details match any entry in the array
        const userFound = userDetailsArray.some(user => user.email === email && user.password === password);

        // Set message based on login success or failure
        if (userFound) {
            localStorage.setItem('isLoggedIn', true);
            toast.success('Login successful!');
            Navigate('/home');

        } else {
            toast.error('Invalid email or password!');
        }
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="page">
            <div className="left-side">
                <img className="img" src={Logo} alt="Logo" />
            </div>
            <div className="right-side">
                <h1 className="title">Welcome to TaskMaster</h1>
                <h2 className="subtitle">Please, Enter your Details to access your tasks.</h2>
                <h2 className="field-name">Email</h2>
                <input
                    className="input-field"
                    value={email}
                    id="email"
                    onChange={handleEmail}
                    placeholder="Enter your email"
                />
                <h2 className="field-name">Password</h2>
                <input
                    className="input-field"
                    placeholder="Enter your password"
                    id="password"
                    onChange={handlePassword}
                    type="password"
                />
                <div className="keep-signed">
                    <input className="checkbox" type="checkbox" />
                    <span className="subtitle">Remember me</span>
                </div>
                
                <button className="sign-in" onClick={handleLogin}>Sign In</button>
                
                <h2 className="subtitle">Don&apos;t have an account? <a href="Signup">Sign Up</a></h2>
            </div>
        </div>
    );
};

export default Login;
