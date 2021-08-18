import React from 'react';
import PropTypes from 'prop-types';

const WeatherForm = ({ apiCall }) => {
    return (
        <div className='bg-white pt-12 pb-16'>
            <p className='flex mt-10 flex-col items-center font-extrabold text-6xl text-center md:text-4xl mb-10 text-gray-900'>Weather Information</p>
            <form onSubmit={apiCall} className='flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center m-auto'>
                <div className=' relative '>
                    <input
                        name='loc'
                        type='text'
                        className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                        placeholder='Your City'
                    />
                </div>
                <button
                    className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200'
                    type='submit'
                >
                    Search
                </button>
            </form>
        </div>
    );
};

WeatherForm.propTypes = {
    apiCall: PropTypes.func.isRequired,
};

export default WeatherForm;
