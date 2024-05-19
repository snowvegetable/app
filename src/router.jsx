import {createBrowserRouter} from "react-router-dom";
import Login from "./components/login/Login";
import Firstedge from "./components/Firstdege/firstedge";
// import StudentPage from "./components/login/components/home/studentPage/StudentPage";
import TeacherPage from "./components/login/components/home/teacherPage/TeacherPage";
import AdminPage from "./components/login/components/home/adminPage/AdminPage";
import RouterAuth from "./components/login/components/AuthPage";
import ErrorPage from "./components/error/errorPage";
import Manager_page from "./components/manager_page/Manager";
import ChangeUserData from "./components/login/components/home/adminPage/ChangeUserData/ChangeUserData";
import Student_Page from "./components/student_page/Student_Page";

const router = createBrowserRouter([
  { path: "/", element: <Firstedge /> },
  { path: "/login", element: <Login /> },
  {
    path: "/home",
    element: <RouterAuth />,
    children: [
      { path: "student" },
      { path: "teacher", element: <TeacherPage /> },
      {
        path: "admin",
        element: <AdminPage />,
        children: [{ path: "changeUserData", element: <ChangeUserData /> }],
      },
    ],
  },
  { path: "/manager", element: <Manager_page /> },
  { path: "/student", element: <Student_Page />},
  { path: "/*", element: <ErrorPage /> },
]);

export default router;
