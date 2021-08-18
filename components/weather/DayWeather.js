import React from 'react';
import PropTypes from 'prop-types';

const DayWeather = ({ city, weather, kelvinToCelsius }) => {
    return (
        <>
            <div className='bg-gray-100'>
                <div className='relative px-4 my-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:my-10'>
                    <p className='flex flex-col items-center font-extrabold text-6xl text-center md:text-2xl mb-10 text-gray-900'>
                        Weather information for <span className='text-orange-400'>{city}</span>
                    </p>

                    <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
                            <div className='p-5'>
                                <p className='mb-2 text-gray-500'>Weather</p>
                                <p className='text-lg font-bold leading-5 text-gray-900 capitalize'>{weather.descp}</p>
                            </div>
                            <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
                        </div>
                        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
                            <div className='p-5'>
                                <p className='mb-2 text-gray-500'>Temperature</p>
                                <p className='text-lg font-bold leading-5 text-gray-900'>{kelvinToCelsius(weather.temp)}</p>
                            </div>
                            <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
                        </div>
                        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
                            <div className='p-5'>
                                <p className='mb-2 text-gray-500'>Humidity</p>
                                <p className='text-lg font-bold leading-5 text-gray-900'>{weather.humidity}</p>
                            </div>
                            <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
                        </div>
                        <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
                            <div className='p-5'>
                                <p className='mb-2 text-gray-500'>Pressure</p>
                                <p className='text-lg font-bold leading-5 text-gray-900'>{weather.press}</p>
                            </div>
                            <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

DayWeather.proptypes = {
    city: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired,
    kelvinToCelsius: PropTypes.func.isRequired,
};

export default DayWeather;
