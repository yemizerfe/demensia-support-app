import React from 'react';

function RecipeSection({ name, steps = [] }) {
  return (
    <div className='w-full max-w-xl my-5 p-5 bg-white rounded-lg shadow-xl shadow-indigo-200 transition duration-300 ease-in-out hover:scale-105'>
      <h2 className='text-2xl font-bold text-indigo-600 mb-4 text-center'>{name}</h2>
      <ul className='list-disc list-inside text-gray-700'>
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <li key={index} className='mb-2'>
              {step}
            </li>
          ))
        ) : (
          <li>No steps provided.</li>
        )}
      </ul>
    </div>
  );
}

export default RecipeSection;
