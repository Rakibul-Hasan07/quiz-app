import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizTopic = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data.questions;
    // console.log(quizData.data.questions);
    return (
        <div>
            <h1>this is quiz topic: {quizes.length}</h1>
            {
                quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default QuizTopic;