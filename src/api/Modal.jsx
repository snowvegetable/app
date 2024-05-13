import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState({
    userId: '',
    username: '',
    password: '',
  });

  // 使用 useEffect 鉤子監聽 user 的變化
  useEffect(() => {
    // 如果 user 存在，將其資料填入表單
    if (user) {
      setFormData({
        userId: user.user_id || '',
        username: user.user_name || '',
        password: user.password || '',
      });
    }
  }, [user]); // 每當 user 發生變化時執行

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在這裡處理表單提交
    console.log('提交的資料:', formData);
    // 關閉模態對話框
    onClose();
  };
  


  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>用戶號{formData.userId}：</h2>
        <form onSubmit={handleSubmit}>
          <label>用戶名稱：</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
          <br />
          <label>密碼：</label>
          <input type="text" name="password" value={formData.password} onChange={handleInputChange} />
          <br />
          <button type="submit">提交</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
