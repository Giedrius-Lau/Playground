import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WeatherForm from '../components/weather/WeatherForm';
import DailyWeather from '../components/weather/DailyWeather';
import DayWeather from '../components/weather/DayWeather';
import Loading from '../components/Loading';
import Alert from '../components/Alert';

function App() {
    const [weather, setWeather] = useState('');
    const [dailyWeather, setDailyWeather] = useState('');
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');
    const apiKey = '4b1aa1721cb7ceebc99c71882cd0fbf6';
    const exclude = 'minutely,alerts,current';
    const [lat, setLat] = useState(54.9);
    const [lon, setLon] = useState(23.9);

    const apiCall = async (e) => {
        e.preventDefault();
        const loc = e.target.elements.loc.value;

        if (loc) {
            setLoading(true);

            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
                const req = axios.get(url);
                const res = await req;

                setWeather({
                    descp: res.data.weather[0].description,
                    temp: res.data.main.temp,
                    city: res.data.name,
                    humidity: res.data.main.humidity,
                    press: res.data.main.pressure,
                });

                setLat(res.data.coord.lat);
                setLon(res.data.coord.lon);
                setCity(res.data.name);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                if (error.message === 'Request failed with status code 404') {
                    setAlert('Cannot find this city');
                    setTimeout(() => {
                        setAlert('');
                    }, 10000);
                    return;
                }
            }

            try {
                setLoading(true);
                const secondUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units={metric}&appid=${apiKey}`;
                const request = axios.get(secondUrl);
                const response = await request;

                setDailyWeather(response.data.daily);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                if (error.message === 'Request failed with status code 404') {
                    setAlert('Cannot find this city');
                    setTimeout(() => {
                        setAlert('');
                    }, 10000);
                }
            }
        }
    };

    const closeAlert = () => {
        setAlert('');
    };

    return (
        <>
            <Header></Header>
            <div className='w-full flex flex-col justify-center py-5 bg-gray-100 h-full relative mt-10 min-h-screen'>
                {alert && <Alert closeAlert={closeAlert} message={alert}></Alert>}
                {loading && <Loading></Loading>}
                <WeatherForm apiCall={apiCall}></WeatherForm>
                {weather && <DayWeather city={city} weather={weather} kelvinToCelsius={kelvinToCelsius}></DayWeather>}
                {dailyWeather && <DailyWeather convertTime={convertTime} kelvinToCelsius={kelvinToCelsius} dailyWeather={dailyWeather}></DailyWeather>}
            </div>
            <Footer></Footer>
        </>
    );
}

const kelvinToCelsius = (temp) => {
    return (temp - 273.15).toFixed(0) + '°C';
};

const convertTime = (time) => {
    const unixTimestamp = time;
    const milliseconds = unixTimestamp * 1000; // 1575909015000
    const dateObject = new Date(milliseconds);
    const weekDay = dateObject.toLocaleString('en-US', { weekday: 'long' }); // Monday
    const month = dateObject.toLocaleString('en-US', { month: 'long' }); // December
    const day = dateObject.toLocaleString('en-US', { day: 'numeric' }); // 9

    return `${weekDay}, ${day} ${month}`;
};

export default App;
