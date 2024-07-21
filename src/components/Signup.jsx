import { useState } from "react";
import Logo from "../Img/Logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";

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
    function handleName(event) {
        setName(event.target.value);
    }

    return (
        <>
            <Header />
            <div className="w-full h-screen flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-1/2 md:h-full dark:bg-slate-800 bg-gray-200 flex items-center justify-center">
                    <img className="w-3/5" src={Logo} alt="Logo" />
                </div>
                <div className="w-full md:w-1/2 md:h-full flex flex-col dark:bg-slate-600 justify-center items-start p-8 md:pl-32 box-border">
                    <h1 className="text-gray-800 dark:text-white font-roboto text-4xl mb-3">Welcome to TaskMaster</h1>
                    <h2 className="text-gray-500 dark:text-slate-100 font-roboto text-lg font-light mb-2">Please, Enter your information to Create an Account.</h2>
                    <h2 className="text-gray-600 dark:text-slate-200 font-roboto text-lg mb-2">Name</h2>
                    <input
                        className="w-full md:w-3/5 md:h-10 rounded-lg border dark:border-gray-100 dark:bg-slate-500 border-gray-400 pl-2 text-lg text-gray-600 box-border mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500  dark:placeholder-gray-100"
                        value={name}
                        id="name"
                        onChange={handleName}
                        placeholder="Enter your Full Name"
                    />
                    <h2 className="text-gray-600 dark:text-slate-200 font-roboto text-lg mb-2">Email</h2>
                    <input
                        className="w-full md:w-3/5 md:h-10 rounded-lg border dark:border-gray-100 dark:bg-slate-500 border-gray-400 pl-2 text-lg text-gray-600 box-border mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500  dark:placeholder-gray-100"
                        value={email}
                        id="email"
                        onChange={handleEmail}
                        placeholder="Enter your email"
                    />
                    <h2 className="text-gray-600 dark:text-slate-200 font-roboto text-lg mb-2">Password</h2>
                    <input
                        className="w-full md:w-3/5 md:h-10 rounded-lg border dark:border-gray-100 dark:bg-slate-500 border-gray-400 pl-2 text-lg text-gray-600 box-border mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:placeholder-gray-100"
                        placeholder="Enter your password"
                        id="password"
                        onChange={handlePassword}
                        type="password"
                    />
                    <div className="flex items-center mb-4">
                        <input className="mr-2 h-4 w-4 border border-gray-800" type="checkbox" />
                        <span className="text-gray-500 dark:text-slate-100 font-roboto text-lg">Remember me</span>
                    </div>
                    <button className="w-full md:w-3/5 md:h-10 pt-[5px] pb-[5px] rounded-lg bg-purple-500 dark:bg-[#dc3dff] text-white text-lg font-medium mb-4 dark:hover:bg-[#cc23c5] hover:bg-purple-700"
                        onClick={handleSignup}>Sign up</button>
                    <h2 className="text-gray-500  dark:text-slate-100 font-roboto text-lg font-light">Already have an account? <a href="/" className="text-purple-500 font-bold dark:text-[#dc3dff] dark:hover:text-[#cc23c5] hover:text-purple-700">Sign In</a></h2>
                </div>
            </div>
        </>
    );
};

export default Signup;
