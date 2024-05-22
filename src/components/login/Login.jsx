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
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
        <div>
            <div className="navbar">
                <button className="home_btn">最新消息</button>
                <button className="home_btn">簡答題評分系統</button>
                <button className="home_btn">關於我們</button>
                <button className="home_btn">聯絡我們</button>
                <button className="home_btn" onClick={() => navigate("/login")}>
                    登入
                </button>
            </div>
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
        </div>
    );
}

export default Login;
