import { useState } from "react";
import "../css/quiz_page.css";

function quizSystem() {
  const [question,setQuestion] = useState("問題");
  const [anwser,setAnwser] = useState("答案");
  const [result,setResult] = useState("結果"); // [question,anwser,result]

  const API = "";
  const handleSubmit = async(event) =>{
      event.preventDefault();
      try {
          let res = await fetch(API, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              question,
              anwser
            }),
          });
          let data = await res.json();
          if (res.status === 200) {
            setResult(data.result);
          } else {
            
          }
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <div className="container">
      <h1>Quiz System</h1>
      <form onSubmit={handleSubmit}>
        <div className="question">{question}</div>
        <div className="answer-input">
          <input
            type="text"
            value={anwser}
            onChange={(e) => setAnwser(e.target.value)}
            placeholder="輸入你的答案"
          />
          <button type="submit">送出</button>
        </div>
      </form>
      <div className="result">{result}</div>
    </div>
  );
}

export default quizSystem;