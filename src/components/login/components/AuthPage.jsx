import { Outlet, useNavigate, redirect, Navigate } from "react-router-dom";

// export async function loader() {
//   let user = localStorage.getItem("user");
//   user = JSON.parse(user);
//   console.log(user);

//   if (!user || !user.token) {
//     return redirect("/");
//   }

//   return null;
// }

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
