import { useEffect, useState } from 'react';
import '../css/quizHistory.css';

const QuizHistory = () => {
  const [quizRecords, setQuizRecords] = useState([]);
  const studentId = 1;
  const API_URL = `http://localhost:3001/student/${studentId}/records`;

  useEffect(() => {
    console.log('Fetching quiz records...');
    fetch(API_URL)
      .then(response => {
        console.log('Response received:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data parsed:', data);
        setQuizRecords(data);
      })
      .catch(error => {
        console.error('Error fetching quiz records:', error);
      });
  }, [API_URL]);
  console.log('Quiz records:', quizRecords);
  return (
    <div>
      <h1>Quiz History</h1>
      <ul>
        {
        quizRecords.map(record => (
            // 我要一格顯示題目、答案、我的回答、分數
            <li key={record.id}>
              <h3 className='question'>{record.question}</h3>
              <div className='ans'>Correct Answer: {record.answer}</div>
              <div className='myAns'>Your Answer: {record.myAnswer}</div>
              <div className='score'>Score: {record.score}</div>
            </li>
            ))
        }
      </ul>
    </div>
  );
};

export default QuizHistory;