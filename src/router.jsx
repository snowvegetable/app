import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import StudentPage from "./components/studentPage/StudentPage";
import TeacherPage from "./components/teacherPage/TeacherPage";
import AdminPage from "./components/adminPage/AdminPage";
import AuthPage, { loader as authLoader } from "./components/login/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "auth/",
    element: <AuthPage />,
    loader: authLoader,
    children: [
      {
        path: "student/",
        element: <StudentPage />,
      },
      {
        path: "teacher/",
        element: <TeacherPage />,
      },
      {
        path: "admin/",
        element: <AdminPage />,
      },
    ],
  },
]);

export default router;
