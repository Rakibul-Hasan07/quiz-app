import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
    const { id, name, logo, total } = cart;
    const navigate = useNavigate();
    const clickToUniqueRoute = () => {
        navigate(`/topic/${id}`)
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl rounded-md bg-slate-300 border">
                <img src={logo} alt="" />
                <div className="card-body">
                    <h2 className="card-title py-3 font-bold text-xl">
                        {name}
                    </h2>
                    <div className="card-actions justify-evenly flex items-center py-6 font-bold">
                        <h3>Total Quiz: {total}</h3>
                        <button onClick={clickToUniqueRoute} className="btn btn-outline btn-primary font-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;