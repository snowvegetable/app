import { Outlet, useNavigate, redirect } from "react-router-dom";

export async function loader() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  console.log(user);

  if (!user || !user.token) {
    return redirect("/");
  }

  return null;
}

export default function AuthPage() {
  let navigate = useNavigate();
  let isLogined = true;

  return (
    <>
      {isLogined ? (
        <Outlet />
      ) : (
        <button onClick={() => navigate("/")}>student</button>
      )}
    </>
  );
}
