import React from 'react';
import PropTypes from 'prop-types';

const DailyWeather = ({ dailyWeather, convertTime, kelvinToCelsius }) => {
    return (
        <div>
            <>
                <div className='relative px-4 my-10 mx-auto w-full'>
                    <p className='text-2xl uppercase text-center font-extrabold mb-4'>8 day Forecast</p>

                    <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                        {dailyWeather.map((day, index) => {
                            const image = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'
                                >
                                    <div className='p-5'>
                                        <div className='m-auto w-20 h-20 mb-4 rounded-full bg-indigo-50'>
                                            <img className='' src={image} alt=''></img>
                                        </div>
                                        <div className='text-lg text-center'>{convertTime(day.dt)}</div>
                                        <p className='text-lg text-center mb-4 font-bold'>{day.weather[0].description}</p>
                                        <div>
                                            Temperature: <span className='font-bold float-right text-bol'>{kelvinToCelsius(day.temp.day)}</span>
                                        </div>
                                        <p className='mb-2 '>
                                            Cloudy:
                                            <span className='font-bold float-right leading-5 text-gray-900'>{day.clouds}%</span>
                                        </p>
                                    </div>
                                    <div className='w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        </div>
    );
};

DailyWeather.proptypes = {
    dailyWeather: PropTypes.object.isRequired,
    convertTime: PropTypes.func.isRequired,
    kelvinToCelsius: PropTypes.func.isRequired,
};

export default DailyWeather;
