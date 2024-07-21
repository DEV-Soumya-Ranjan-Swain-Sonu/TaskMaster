import { reoil } from "recoil";
export const AuthContext = reoil.atom({
    key: "isLoggedIn",
    default: false
})