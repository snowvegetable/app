// AdminPanel.jsx

import React, { useState } from "react";
import "../css/manager.css";

function AdminPanel() {
    const [tab, setTab] = useState("users");

    const handleTabChange = (tabName) => {
        setTab(tabName);
    };

    const users = [
        { "user_id": 1, "user_name": "User1", "password": "MZCoQh8u", "identity": "admin" },
        { "user_id": 2, "user_name": "User2", "password": "M5swkkx0", "identity": "admin" },
        { "user_id": 6, "user_name": "User6", "password": "PB7po99U", "identity": "admin" },
        { "user_id": 7, "user_name": "User7", "password": "P5zwF2eH", "identity": "admin" }
    ];

    const teachers = [
        { "user_id": 4, "user_name": "User4", "password": "RDLb7uGl", "identity": "teacher" },
        { "user_id": 5, "user_name": "User5", "password": "5v8RyWA6", "identity": "teacher" }
    ];

    const students = [
        { "user_id": 3, "user_name": "User3", "password": "JNxcv0bx", "identity": "student" }
    ];

    return (
        <div className="admin-panel">
            <div className="tabs">
                <button
                    className={`tab ${tab === "users" ? "active" : ""}`}
                    onClick={() => handleTabChange("users")}
                >
                    用戶管理
                </button>
                <button
                    className={`tab ${tab === "teachers" ? "active" : ""}`}
                    onClick={() => handleTabChange("teachers")}
                >
                    教師管理
                </button>
                <button
                    className={`tab ${tab === "students" ? "active" : ""}`}
                    onClick={() => handleTabChange("students")}
                >
                    學生管理
                </button>
            </div>
            <div className="showbox">
                {tab === "users" && <UserManagement users={users} />}
                {tab === "teachers" && <TeacherManagement teachers={teachers} />}
                {tab === "students" && <StudentManagement students={students} />}
            </div>
        </div>
    );
}

const UserManagement = ({ users }) => {
    // 彈出視窗函數
    const openPopup = (userId) => {
        // 在這裡實現打開視窗的邏輯
        alert(`打開用戶 ${userId} 的資料更新視窗`);
    };

    return (
        <div className="user-management">
            <h2>用戶管理</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th className="table-cell">用戶ID</th>
                        <th className="table-cell">用戶名稱</th>
                        <th className="table-cell">密碼</th>
                        <th className="table-cell">身份</th>
                        <th className="table-cell">更新</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.user_id}>
                            <td className="table-cell">{user.user_id}</td>
                            <td className="table-cell">{user.user_name}</td>
                            <td className="table-cell">{user.password}</td>
                            <td className="table-cell">{user.identity}</td>
                            <td className="table-cell">
                                <button className="update-button" onClick={() => openPopup(user.user_id)}>更新</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function TeacherManagement({ teachers }) {
    return (
        <div>
            <h2>教師管理</h2>
            <ul>
                {teachers.map(teacher => (
                    <li key={teacher.user_id}>{teacher.user_name} - {teacher.identity}</li>
                ))}
            </ul>
        </div>
    );
}


function StudentManagement() {
    return (
        <div>
            <h2>學生管理</h2>
            <ul>
                <li>學生1</li>
                <li>學生2</li>
                <li>學生3</li>
            </ul>
        </div>
    );
}

export default AdminPanel;
