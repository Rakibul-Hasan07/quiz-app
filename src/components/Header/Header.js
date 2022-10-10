import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between px-16 py-3 bg-pink-300'>
                <h1 className='font-bold text-2xl'>My Quiz App</h1>
                <div className='header font-bold text-2xl'>
                    <Link to='/home'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statics'>Statics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>
            <div className='bg-slate-200'>
                <img className='w-90 h-[500px] mx-auto pt-10' src='/header.jpg' alt="" />
                <p className='text-2xl font-bold py-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam vero perspiciatis inventore eaque non suscipit atque, eveniet culpa numquam velit accusantium consectetur cupiditate. A, nisi est deleniti recusandae alias harum ad doloremque natus illum culpa nobis quisquam minus excepturi adipisci aliquid quaerat sequi vel beatae illo odit similique consectetur. Inventore!</p>
            </div>
        </div>
    );
};

export default Header;