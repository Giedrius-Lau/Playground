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

export default { kelvinToCelsius, convertTime };
