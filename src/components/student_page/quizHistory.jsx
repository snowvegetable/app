import React, { useEffect, useState } from 'react';

const QuizHistory = () => {
    const [quizRecords, setQuizRecords] = useState([]);

    // useEffect(() => {
    //     // Fetch the quiz records for the student here
    //     // Replace the API_URL with the actual endpoint
    //     fetch(API_URL)
    //         .then(response => response.json())
    //         .then(data => setQuizRecords(data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div>
            <h1>Quiz History</h1>
            <ul>
                {quizRecords.map((record, index) => (
                    <li key={index}>{record.question}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuizHistory;