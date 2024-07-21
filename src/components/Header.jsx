import { useEffect, useState } from "react";
import MoonIcon from "../assets/icons/MoonIcon";
import SunIcon from "../assets/icons/SunIcon";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

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
        <header className="top-0 left-0 w-full shadow-2xl z-50">
            <div className="px-4 md:max-w-xl lg:max-w-2xl md:mb-[20px] mx-auto lg:mx-0">
                <div className="flex justify-between items-center py-4">
                    <nav>
                        <ul className="flex space-x-4  lg:ml-28">
                            <li><a href="/home" className="text-white">Home</a></li>
                            <li><a href="/signin" className="text-white">Signin</a></li>
                            <li><a href="/signup" className="text-white">Signup</a></li>
                            <li><a href="/search" className="text-white">Search</a></li>
                            <li><a href="/logout" className="text-white">Logout</a></li>
                        </ul>
                    </nav>

                    <div className="lg:max-w-7xl lg:ml-96"><h1 className="text-white text-3xl font-bold">TaskMaster</h1> </div>
                    <div className="lg:max-w-7xl lg:ml-96">
                         <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <SunIcon className="fill-white" /> : <MoonIcon className="fill-white" />}
                    </button>
                    </div>
                   
                </div>
            </div>
        </header>
    );
};

export default Header;
