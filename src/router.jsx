import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import Login from "./components/login/Login";
import Firstedge from "./components/Firstdege/firstedge";
import StudentPage from "./components/login/components/home/studentPage/StudentPage";
import TeacherPage from "./components/login/components/home/teacherPage/TeacherPage";
import AdminPage from "./components/login/components/home/adminPage/AdminPage";
import RouterAuth from "./components/login/components/AuthPage";
import ErrorPage from "./components/error/errorPage";

const router = createBrowserRouter([
  { path: "/", element: <Firstedge /> },
  { path: "/login", element: <Login /> },
  {
    path: "/home",
    element: <RouterAuth />,
    children: [
      {
        path: "student",
        element: <StudentPage />,
        children: [{ path: "aaa", element: <div>aaa</div> }],
      },
      { path: "teacher", element: <TeacherPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
  { path: "/*", element: <ErrorPage /> },
]);

export default router;
