import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const [correct, setCorrect] = useState([])
    console.log(correct);

    const { question, correctAnswer } = quiz;

    const singleQuiz = quiz.options;

    const handleClick = (oneQuiz) => {
        console.log(oneQuiz);
        if (oneQuiz === correctAnswer) {
            toast("WOw Correct Answer!", {position:"top-center"})
        }
        else {
            toast("Oops Wrong Answer!", {position:"top-center"})
        }
    }
    const showCorrectAns = (singleQuiz) => {
        console.log(singleQuiz);
        const quiz = singleQuiz.find(oQuiz => oQuiz === correctAnswer);
        setCorrect(quiz)
    }
    return (
        <div className='bg-slate-200 rounded-lg my-10 p-10'>
            <div className='flex justify-between px-5'>
                <h1 className='font-bold text-xl'>Quiz: {question}</h1>
                <EyeIcon onClick={()=>showCorrectAns(singleQuiz)} className="h-6 w-6 text-blue-500" />
            </div>
            <div className='grid grid-cols-2'>
                {
                    singleQuiz.map(oneQuiz => <div>
                        <div className={`border rounded-md border-black m-5 p-5 ${oneQuiz === correct? "bg-pink-200" : undefined}`}>
                            <input type="radio" id="yes" name="choose" value="yes" onClick={() => handleClick(oneQuiz)} />
                            <label for="yes" className='ml-3'>{oneQuiz}</label>
                        </div>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quiz;