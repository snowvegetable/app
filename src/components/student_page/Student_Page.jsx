// 學生頁面需要有的功能
// 1. 顯示學生的基本資料
// 2. 答題系統(使用文字輸入欄位)，答題完可直接看評分結果，題目與答案由後端提供
// 3. 查看答題歷史紀錄
// 4. 查看反饋報告(有圖與文字呈現)

import { useState } from "react";
import FeedbackReport from "./feedbackReport";
import QuizSystem from "./quizSystem";
import QuizHistory from "./quizHistory";

function Student_Page(){
    const [page,setPage] =  useState('home');
    return(
        <>
            <div>
                <nav>
                    <ul>
                        <h1>Student Page</h1>
                        <li><button onClick={()=>{setPage('home')}}>Home</button></li>
                        <li><button onClick={()=>{setPage('profile')}}>Profile</button></li>
                        <li><button onClick={()=>{setPage('test')}}>答題 </button></li>
                        <li><button onClick={()=>{setPage('history')}}>答題紀錄</button></li>
                        <li><button onClick={()=>{setPage('report')}}>反饋報告</button></li>
                    </ul>
                </nav>
                
            </div>
            <div className="page">
                {/*根據不同狀態顯示不同的組件 */}
                {page === 'home' && <div>Home~~~~</div>}
                {page === 'profile' && <div>Profile~~~~</div>}
                {page === 'test' && <QuizSystem/>}
                {page === 'history' && <QuizHistory/>}
                {page === 'report' && <FeedbackReport/>}
            </div>
        </>
    );
}
export default Student_Page;