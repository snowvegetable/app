import { Outlet, Navigate } from "react-router-dom";

function getToken() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return user.token;
}

export default function RouterAuth({ children }) {
  let token = getToken();

  if (token) {
    return <>{<Outlet />}</>;
  } else {
    return <Navigate to="/" />;
  }
}
