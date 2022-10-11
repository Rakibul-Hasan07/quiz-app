import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 bg-pink-200 shadow-lg px-16">
            <div className="flex-1">
                <p className="normal-case text-xl font-bold">RH-Quiz-<span className='text-pink-600'>Contest</span></p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/topics'>Topics</NavLink>
                    <NavLink to='/statics'>Statics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;