import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
export default function Logout() {
    localStorage.removeItem('isLoggedIn');
    const Navigate = useNavigate();
    setTimeout(async () => {
        toast.success("Logout successful");
        Navigate("/")
    }, 1500);

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-gray-900 bg-no-repeat width bg-contain bg-gray-300 min-h-screen md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />
            <div className="text-center flex justify-center items-center flex-col">
                <h1 className="text-4xl text-white mt-7">Logging Out.....</h1>
                <h3 className="text-4xl text-gray-400 mt-6">Thanks for using the app</h3>
            </div>

        </div>
    )
}
