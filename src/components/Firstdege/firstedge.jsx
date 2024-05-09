import React from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <button className="home_btn">最新消息</button>
      <button className="home_btn">簡答題評分系統</button>
      <button className="home_btn">關於我們</button>
      <button className="home_btn">聯絡我們</button>
      <button className="home_btn" onClick={() => navigate("/login")}>
        登入
      </button>
    </div>
  );
}

export default App;
