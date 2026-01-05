import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp({ onCloseClick }) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [role, setRole] = useState('');
  const [roleError, setRoleError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [res, setRes] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (password.length < 8) {
        setPasswordError(true);
        return;
      }

      setPasswordError(false);

      if (password !== confirmPassword)
        return setShowConfirm(true);

      setShowConfirm(false);

      if (!role) {
        setRoleError(true);
        return;
      }

      setRoleError(false);




      const response = await axios.post('http://localhost:3000/signUp', {
        fullname: fullName,
        email,
        password,
        role
      });

      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setRole('');

      if (role == 'patient')
        return navigate('/patient');

      else if (role == 'caregiver')
        return navigate('/caregiver');


    }
    catch (e) {
    }
  }

  return (
    <div>
      <form onSubmit={handleSignUp} className='shadow-lg shadow-indigo-200 w-sm rounded-lg  p-5 bg-white'>
        <div className='flex flex-row justify-end'>
          <button className={`rounded-full ring-1 ring-gray-300 p-3  my-3 mx-3 font-bold text-md font-serif  w-fit focus:translate-0.5
           ${role == 'patient' ? 'bg-violet-400' : ' bg-violet-300 hover:bg-indigo-100'}`}
            onClick={() => setRole('patient')}>
            Patient
          </button>
          <button className={`rounded-full ring-1 ring-gray-300 p-3 my-3 font-bold text-md font-serif mx-7 hover:bg-indigo-100 w-fit focus:translate-0.5 
           ${role == 'caregiver' ? 'bg-violet-400' : 'bg-violet-300 hover:bg-indigo-100'}`}
            onClick={() => setRole('caregiver')}>
            Caregiver
          </button>
          <button className='ring-2 ring-gray-300 rounded-full font-bold text-xl w-8 h-8 hover:bg-gray-200 focus:translate-0.5'
            onClick={onCloseClick}>
            &times;
          </button>
        </div>

        <div className='flex flex-col items-center'>
          <label htmlFor="name" className='block my-3 font-bold font-serif'>FullName</label>
          <input type="text" className='outline-3 outline-offset-2 outline-double outline-indigo-500 w-xs font-serif font-normal rounded-sm px-2 focus:shadow-xl'
            name='fullname'
            id='name'
            placeholder='John Doe Simpsons'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="Email" className='block my-3 font-bold font-serif'>Email</label>
          <input type="email" className='outline-3 outline-offset-2 outline-double outline-indigo-500 w-xs font-serif font-normal rounded-sm px-2 focus:shadow-xl'
            name='email'
            id='Email'
            placeholder='Johndoe@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="pass" className='block my-3 font-bold font-serif'>Password</label>
          <input type="password" className='outline-3 outline-offset-2 outline-double outline-indigo-500 w-xs rounded-sm px-2 focus:shadow-xl'
            name='password'
            id='pass'
            placeholder='xxxxxxxx'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {passwordError && <p className='text-red-500 font-serif font-normal my-3'>Passwords Must Be at Least 8 Characters Long!</p>}

          <label htmlFor="confirmPass" className='block my-3 font-bold font-serif'>Confirm Password</label>
          <input type="password" className='outline-3 outline-offset-2 outline-double outline-indigo-500 w-xs rounded-sm mb-5 px-2 focus:shadow-xl'
            id='confirmPass'
            placeholder='xxxxxxxx'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {showConfirm && <p className='text-red-500 font-serif font-normal my-3'>Passwords Must Match!</p>}

          {roleError && <p className='font-serif font-bold text-violet-500 my-3'>Please Select a Role!</p>}

          <button type='submit' className='font-bold font-serif text-md bg-indigo-300 p-3 cursor-pointer rounded-lg
           outline-3 outline-offset-2 w-24 outline-double outline-indigo-500 hover:bg-indigo-200 focus:translate-0.5'>
            SignUp
          </button>
          {res && <p className='font-serif font-bold text-violet-500 my-3'>{res}</p>}
        </div>
      </form>
    </div>
  )
}

export default SignUp
