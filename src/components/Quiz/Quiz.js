import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const [correct, setCorrect] = useState([])
    const [count, setCount] = useState({ correct: 0, wrong: 0 })
    console.log(count.correct );


    const { question, correctAnswer } = quiz;

    const singleQuiz = quiz.options;

    const handleClick = (oneQuiz) => {
        if (oneQuiz === correctAnswer) {
            toast("Wow Correct Answer!", { position: "top-center" })
            setCount({ ...count, correct: count + 1 })
        }
        else {
            toast("Oops Wrong Answer!", { position: "top-center" })
        }
    }
    const showCorrectAns = (singleQuiz) => {
        const quiz = singleQuiz.find(oQuiz => oQuiz === correctAnswer);
        setCorrect(quiz)
    }
    return (
        <div className='bg-slate-200 rounded-lg my-10 p-10'>
            <div className='flex justify-between md:px-5'>
                <h1 className='font-bold text-xl'>Quiz: {question}</h1>
                <EyeIcon onClick={() => showCorrectAns(singleQuiz)} className="h-6 w-6 text-blue-500" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    singleQuiz.map((oneQuiz, idx) => <div key={idx}>
                        <div className={`border rounded-md border-black my-2 py-2 md:m-5 md:py-4 ${oneQuiz === correct ? "bg-pink-200" : undefined}`}>
                            <input type="radio" id="yes" name="choose" value="yes" onClick={() => handleClick(oneQuiz)} />
                            <label htmlFor="yes" className='ml-3'>{oneQuiz}</label>
                        </div>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quiz;