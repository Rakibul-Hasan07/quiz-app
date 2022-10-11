import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const { id, question, correctAnswer } = quiz;
    const singleQuiz = quiz.options;
    const correct = () => toast("WOw Correct Answer!")
    const incorrect = () => toast("Oops Wrong Answer!")
    return (
        <div>
            <h1 className='w-[800px] mx-auto font-bold text-xl'>Quiz: {question}</h1>
            {/* <div onClick={correct} className='border my-6  p-5 font-bold'>01: <button>{quiz.options[0] ? quiz.options[0] : 'No Option'}</button></div>
            <div className='border my-6 p-5 font-bold'>02: <button>{quiz.options[1] ? quiz.options[1] : 'No Option'}</button></div>
            <div className='border my-6 p-5 font-bold'>03: <button>{quiz.options[2] ? quiz.options[2] : 'No Option'}</button></div>
            <div className='border my-6 p-5 font-bold'>04: <button>{quiz.options[3] ? quiz.options[3] : 'No Option'}</button></div> */}
            {
                singleQuiz.map(oneQuiz => <li>{oneQuiz}</li>)
            }
            <ToastContainer />
        </div>
    );
};

export default Quiz;