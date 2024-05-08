import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import StudentPage from "./components/login/components/home/studentPage/StudentPage";
import TeacherPage from "./components/login/components/home/teacherPage/TeacherPage";
import AdminPage from "./components/login/components/home/adminPage/AdminPage";
import RouterAuth from "./components/login/components/AuthPage";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/home",
    element: <RouterAuth></RouterAuth>,
    children: [
      { path: "student", element: <StudentPage /> },
      { path: "teacher", element: <TeacherPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default router;
