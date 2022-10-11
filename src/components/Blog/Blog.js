import React from 'react';

const Blog = () => {
    return (
        <div className='mx-20'>
            <h1 className='font-bold text-2xl py-2'>Welcome To My Blog</h1>
            <div className='bg-slate-200 p-10 my-5 rounded-lg'>
                <h4 className='font-bold text-xl mb-3'>What is the purpose  at react router?</h4>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='bg-slate-200 p-10 my-5 rounded-lg'>
                <h4 className='font-bold text-xl mb-3'>How does context API works?</h4>
                <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
            <div className='bg-slate-200 p-10 my-5 rounded-lg'>
                <h4 className='font-bold text-xl mb-3'>What is useRef hook?</h4>
                <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
    );
};

export default Blog;