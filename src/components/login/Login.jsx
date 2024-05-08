import { Form, useNavigate } from "react-router-dom";
import loginApi from "../../api/loginApi";
import { useState } from "react";

function changeRouter(identity) {
  switch (identity) {
    case "student": {
      return "home/student/";
    }

    case "teacher": {
      return "home/teacher/";
    }

    case "admin": {
      return "home/admin/";
    }

    default: {
      return "/";
    }
  }
}

function Login() {
  const [formData, setFormData] = useState({
    account: "",
    password: "",
  });

  const navigate = useNavigate();

  async function onLogin(e) {
    e.preventDefault();

    try {
      let userData = await loginApi(formData);

      let path = changeRouter(userData.identity);

      navigate(path);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  return (
    <div>
      <Form action="login" method="post">
        <input
          type="text"
          name="account"
          value={formData.account}
          onChange={(e) =>
            setFormData({
              ...formData,
              account: e.target.value,
            })
          }
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />
        <button type="submit" onClick={onLogin}>
          登入
        </button>
      </Form>
    </div>
  );
}

export default Login;
