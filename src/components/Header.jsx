/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MoonIcon from "../assets/icons/MoonIcon";
import SunIcon from "../assets/icons/SunIcon";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = ({ marginBottomClass }) => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);

    return (
        <header className={`top-0 left-0 w-full shadow-2xl z-50 ${darkMode ? 'bg-gray-800 bg-opacity-70' : 'bg-white bg-opacity-70'}`}>
            <div className={`px-4 max-w-screen-xl mx-auto ${marginBottomClass}`}>
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                        <h1 className={`text-3xl font-bold ml-4 ${darkMode ? 'text-white' : 'text-black'}`}>TaskMaster</h1>
                    </div>
                    <div className="flex items-center">
                        <nav className="hidden lg:flex lg:items-center lg:space-x-4 mr-3">
                            <ul className="flex space-x-4">
                                <li><a href="/home" className={`${darkMode ? 'text-white' : 'text-black'}`}>Home</a></li>
                                <li><a href="/signin" className={`${darkMode ? 'text-white' : 'text-black'}`}>Signin</a></li>
                                <li><a href="/signup" className={`${darkMode ? 'text-white' : 'text-black'}`}>Signup</a></li>
                                <li><a href="/search" className={`${darkMode ? 'text-white' : 'text-black'}`}>Search</a></li>
                                <li><a href="/logout" className={`${darkMode ? 'text-white' : 'text-black'}`}>Logout</a></li>
                            </ul>
                        </nav>
                        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 lg:ml-0">
                            {darkMode ? <SunIcon className="fill-white" /> : <MoonIcon className="fill-black" />}
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
                    <div className={`fixed inset-y-0 left-0 w-64 p-4 z-50 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'}`}>
                        <button className="mb-4" onClick={() => setMenuOpen(false)}>
                            <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <ul className="space-y-4">
                            <li>
                                <a href="/home" className={`block ${darkMode ? 'text-white' : 'text-black'}`}>
                                    <button className={`w-full py-2 px-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-md`}>
                                        Home
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="/signin" className={`block ${darkMode ? 'text-white' : 'text-black'}`}>
                                    <button className={`w-full py-2 px-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-md`}>
                                        Signin
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="/signup" className={`block ${darkMode ? 'text-white' : 'text-black'}`}>
                                    <button className={`w-full py-2 px-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-md`}>
                                        Signup
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="/search" className={`block ${darkMode ? 'text-white' : 'text-black'}`}>
                                    <button className={`w-full py-2 px-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-md`}>
                                        Search
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="/logout" className={`block ${darkMode ? 'text-white' : 'text-black'}`}>
                                    <button className={`w-full py-2 px-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-md`}>
                                        Logout
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
