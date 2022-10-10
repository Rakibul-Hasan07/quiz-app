import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const TopicCart = () => {
    const cartData = useLoaderData();
    const myData = cartData.data;
    return (
        <div className='grid grid-cols-3 gap-8 mx-auto px-40 my-10'>
            {
                myData.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default TopicCart;