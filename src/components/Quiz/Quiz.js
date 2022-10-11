import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { id, question, correctAnswer } = quiz;
    const singleQuiz = quiz.options;
    const handleClick = (oneQuiz) => {
        console.log(oneQuiz);
        if (oneQuiz === correctAnswer) {
            toast("WOw Correct Answer!")
        }
        else {
            toast("Oops Wrong Answer!")
        }
    }
    return (
        <div>
            <h1 className='w-[800px] mx-auto font-bold text-xl'>Quiz: {question}</h1>
            {
                singleQuiz.map(oneQuiz => <div>
                    <div>

                        {/* <label htmlfor={oneQuiz}><input type="radio" id={oneQuiz} onClick={() => handleClick(oneQuiz)} />{oneQuiz}</label> */}
                        <input type="radio" id="yes" name="choose" value="yes" onClick={() => handleClick(oneQuiz)} />
                        <label for="yes">{oneQuiz}</label>
                    </div>
                </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default Quiz;