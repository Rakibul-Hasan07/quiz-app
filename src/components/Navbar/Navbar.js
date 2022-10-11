import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 bg-pink-200 shadow-lg">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">My Quiz App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <Link to='/home'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statics'>Statics</Link>
                    <Link to='/blog'>Blog</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;