import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <ExclamationTriangleIcon className="h-20 w-20 text-slate-400"/>
            <h1 className='font-bold text-2xl my-3'>404</h1>
            <p className='font-bold text-xl'>Sorry, we couldn't find this page</p>
            <button className='btn btn-primary my-3'>
            <Link to="/topics">Back to home</Link>
            </button>
        </div>
    );
};

export default ErrorMessage;