import { Outlet, Navigate, redirect } from "react-router-dom";
import verify_token from "../../../api/verify_token";

function getToken() {
    let token = localStorage.getItem("token");
    return token;
}

export default function RouterAuth({ children }) {
    let token = getToken();
    if (token) {
        return <>{<Outlet />}</>;
    } else {
        return <Navigate to="/" />;
    }
}
