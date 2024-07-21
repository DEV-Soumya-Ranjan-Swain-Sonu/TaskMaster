import { useState } from "react";
import './styles.css';
import Logo from "../Img/Logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    function handleSignup() {
        const existingData = localStorage.getItem('UserDetails');
        const userDetailsArray = existingData ? JSON.parse(existingData) : [];

        const emailExists = userDetailsArray.some(user => user.email === email);

        if (emailExists) {
            toast.error('Email already exists. Please sign in.');
            return;
        }

        const newUserDetails = {
            email: email,
            password: password, 
            name: name
        };
        userDetailsArray.push(newUserDetails);

        localStorage.setItem('UserDetails', JSON.stringify(userDetailsArray));

        setEmail("");
        setPassword("");
        localStorage.setItem('isLoggedIn', true);

        setTimeout(async () => { toast.success("signup successful"); navigate("/home") }, 2000);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }
    function handleName(event){
        setName(event.target.value);
    }

    return (
        <div className="page">
            <div className="left-side">
                <img className="img" src={Logo} alt="Logo" />
            </div>
            <div className="right-side">
                <h1 className="title">Welcome to TaskMaster</h1>
                <h2 className="subtitle">Please, Enter your information to Create an Account.</h2>
                <h2 className="field-name">Name</h2>
                <input
                    className="input-field"
                    value={name}
                    id="name"
                    onChange={handleName}
                    placeholder="Enter your Full Name"
                />
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

                <button className="sign-in" onClick={handleSignup}>Sign up</button>

                <h2 className="subtitle">Already have an account? <a href="/">Sign In</a></h2>

            </div>
        </div>
    );
};

export default Signup;
