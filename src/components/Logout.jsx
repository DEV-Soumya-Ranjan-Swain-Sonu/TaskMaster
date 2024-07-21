import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Logout() {
    localStorage.removeItem('isLoggedIn');
    const Navigate = useNavigate();
    setTimeout(async () => {
        toast.success("Logout successful");
        Navigate("/")
    }, 2000);

    return (
      <div>
            <h1>Logout</h1>
        </div>
    )
}
