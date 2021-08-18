import React from 'react';
import spinner from '../public/spinner.svg';

const Loading = () => {
    return (
        <div className='fixed top-40 w-full z-50'>
            <img src={spinner.src} className='m-auto w-28 rounded-full shadow-2xl' alt='Loading...' />;
        </div>
    );
};

export default Loading;
