import React, { useState, useEffect } from 'react';
import HeaderPatient from '../HeaderPatient';
import axios from 'axios';

function SeeWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (err) {
        setError('Unable to fetch weather data.');
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError('Location access denied.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation not supported.');
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <HeaderPatient />
      <h1 className='text-center text-7xl font-serif m-24 font-bold'>weCare</h1>

      <div className='flex flex-col items-center justify-center my-10'>
        <h2 className='w-full bg-gray-100 shadow-xl shadow-indigo-100 p-5 font-serif text-2xl text-center text-indigo-500'>
          See Weather Condition of The Day!
        </h2>

        <div className='mt-8 text-center font-serif text-xl'>
          {loading && !error && <p>Loading weather data...</p>}
          {error && <p className='text-red-500'>{error}</p>}
          {weather && (
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <p><strong>Location:</strong> {weather.name}</p>
              <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
              <p><strong>Condition:</strong> {weather.weather[0].description}</p>
              <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
              <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SeeWeather;