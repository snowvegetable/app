import { Form, useNavigate } from "react-router-dom";
import loginApi from "../../api/loginApi";
import { useState, useEffect } from "react";
import "../css/login.css";

function changeRouter(identity) {
    switch (identity) {
        case "student": {
            return "/home/student/";
        }

        case "teacher": {
            return "/home/teacher/";
        }

        case "admin": {
            return "/home/admin/";
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

    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // 1 秒後顯示登入框

        return () => clearTimeout(timer);
    }, []); // 空依賴表示僅在組件首次渲染時執行

    async function onLogin(e) {
        e.preventDefault();

        try {
            let identity = await loginApi(formData);

            let path = changeRouter(identity);
            navigate(path);
        } catch (error) {
            console.log(error);
            alert("帳號或密碼輸入錯誤");
            setFormData({ ...formData, password: "" });
        }
    }

    const loginBoxStyle = {
        width: isVisible ? "500px" : "0",
        height: isVisible ? "300px" : "0",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.5s",
    };

    return (

        <div className="login-container">
            <div className="login-box" style={loginBoxStyle}>
                <div className="Login_text">Login</div>
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
                        placeholder="帳號"
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
                        placeholder="密碼"
                    />
                    <button
                        type="submit"
                        className="login_btn"
                        onClick={onLogin}
                    >
                        登入
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
