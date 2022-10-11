import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizTopic = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data.questions;
    return (
        <div>
            <h1 className='my-10 font-bold text-2xl'>Total Quiz: {quizes.length}</h1>
            <div className='px-20'>
                {
                    quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default QuizTopic;