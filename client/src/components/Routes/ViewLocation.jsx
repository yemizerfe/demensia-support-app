import React, { useState, useEffect } from 'react';
import HeaderCareGiver from '../HeaderCareGiver';

function ViewLocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (err) => {
          setError('Location access denied or unavailable.');
          console.error(err);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <HeaderCareGiver />
      <h1 className='text-center text-7xl font-serif m-24 font-bold'>weCare</h1>
      <h2 className='w-full shadow-2xl shadow-indigo-100 my-5 p-5 font-serif text-2xl text-center text-indigo-500'>
        View Location!
      </h2>

      <div className='text-center font-serif text-xl mt-10'>
        {error && <p className='text-red-500'>{error}</p>}
        {location.latitude && location.longitude ? (
          <>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
            <iframe
              title='User Location'
              src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
              width='100%'
              height='300'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
            ></iframe>
          </>
        ) : (
          !error && <p>Fetching location...</p>
        )}
      </div>
    </div>
  );
}

export default ViewLocation;