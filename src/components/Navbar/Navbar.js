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
                    <NavLink to='/topics'className={({ isActive }) => {
                        return isActive ? "bg-pink-400 rounded-md px-2 py-1" : undefined;
                    }}>Topics</NavLink>
                    <NavLink to='/statics'className={({ isActive }) => {
                        return isActive ? "bg-pink-400 rounded-md px-2 py-1" : undefined;
                    }}>Statics</NavLink>
                    <NavLink to='/blog'className={({ isActive }) => {
                        return isActive ? "bg-pink-400 rounded-md px-2 py-1" : undefined;
                    }}>Blog</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;