import { Outlet } from "react-router-dom";

function StudentPage() {
  return (
    <div>
      <p>student</p>
      <Outlet />
    </div>
  );
}

export default StudentPage;
