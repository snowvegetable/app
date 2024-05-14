import { useState } from "react";

const QuizSystem = () => {
    const [answer, setAnswer] = useState("");

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 清空答案输入框
        setAnswer("");
        // 在这里处理提交答案的逻辑
        // 可以将答案发送到服务器进行验证，并根据验证结果更新页面上的结果位置
    };

    return (
        <div>
            <h1>這是答題頁面</h1>
            <div>
                {/* 显示题目的位置 */}
                題目
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={answer} onChange={handleAnswerChange} />
                <button type="submit">提交答案</button>
            </form>
            <div>
                {/* 显示答案结果的位置 */}
            </div>
        </div>
    );
};

export default QuizSystem;