import React, { useState, useEffect } from "react";
import "../css/manager.css";

function AdminPanel() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [userGroup, setUserGroup] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [tableData, setTableData] = useState([]);

    const users = [
        { "user_id": 1, "user_name": "User1", "password": "MZCoQh8u", "identity": "admin" },
        { "user_id": 2, "user_name": "User2", "password": "M5swkkx0", "identity": "admin" },
        { "user_id": 6, "user_name": "User6", "password": "PB7po99U", "identity": "admin" },
        { "user_id": 7, "user_name": "User7", "password": "P5zwF2eH", "identity": "admin" },
        { "user_id": 1, "user_name": "User1", "password": "MZCoQh8u", "identity": "admin" },
        { "user_id": 2, "user_name": "User2", "password": "M5swkkx0", "identity": "admin" },
        { "user_id": 6, "user_name": "User6", "password": "PB7po99U", "identity": "admin" },
        { "user_id": 7, "user_name": "User7", "password": "P5zwF2eH", "identity": "admin" },
        { "user_id": 1, "user_name": "User1", "password": "MZCoQh8u", "identity": "admin" },
        { "user_id": 2, "user_name": "User2", "password": "M5swkkx0", "identity": "admin" },
        { "user_id": 6, "user_name": "User6", "password": "PB7po99U", "identity": "admin" },
        { "user_id": 7, "user_name": "User7", "password": "P5zwF2eH", "identity": "admin" },
    ];

    const teachers = [
        { "user_id": 4, "user_name": "User4", "password": "RDLb7uGl", "identity": "teacher" },
        { "user_id": 5, "user_name": "User5", "password": "5v8RyWA6", "identity": "teacher" },
    ];

    const students = [
        { "user_id": 3, "user_name": "User3", "password": "JNxcv0bx", "identity": "student" },
    ];

    const handleUserSelect = (group) => {
        setUserGroup(group);
        setCurrentPage(1);
        setTableData([]);
    };

    const getUserData = () => {
        switch (userGroup) {
            case "user":
                return users;
            case "teacher":
                return teachers;
            case "student":
                return students;
            default:
                return [];
        }
    };

    const handleUserItemClick = (user) => {
        setSelectedUser(user);
    };

    const totalPages = Math.ceil(getUserData().length / itemsPerPage);

    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = parseInt(e.target.value);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
        setTableData([]);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
        setTableData([]);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        setTableData([]);
    };

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newData = getUserData().slice(startIndex, endIndex);
        setTableData(newData);
    }, [currentPage, itemsPerPage, userGroup]);

    return (
        <div className="admin-panel">
            <div className="container">
                <div className="sidebar">
                    <h2>功能欄</h2>
                    <button onClick={() => handleUserSelect("user")}>顯示 User 資料</button>
                    <button onClick={() => handleUserSelect("teacher")}>顯示 Teacher 資料</button>
                    <button onClick={() => handleUserSelect("student")}>顯示 Student 資料</button>
                    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                        <option value={5}>5 筆/頁</option>
                        <option value={10}>10 筆/頁</option>
                    </select>
                </div>
                <div className="user-details">
                    {userGroup && (
                        <div>
                            <h2>{userGroup === "user" ? "用戶" : userGroup === "teacher" ? "教師" : "學生"}資料</h2>
                            <table key={`${userGroup}-${currentPage}`} className="user-table">
                                <thead>
                                    <tr>
                                        <th>用戶ID</th>
                                        <th>用戶名稱</th>
                                        <th>密碼</th>
                                        <th>功能欄</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((user) => (
                                        <tr key={user.user_id} onClick={() => handleUserItemClick(user)}>
                                            <td>{user.user_id}</td>
                                            <td>{user.user_name}</td>
                                            <td>{user.password}</td>
                                            <td><button className="update_btn">修改</button><button className="delete_btn">刪除</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pagination">
                                <button onClick={goToPreviousPage} disabled={currentPage === 1}>上一頁</button>
                                <span>第 {currentPage} 頁 / 共 {totalPages} 頁</span>
                                <button onClick={goToNextPage} disabled={currentPage === totalPages}>下一頁</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
