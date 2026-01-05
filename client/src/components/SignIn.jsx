import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignIn({ onCloseClick }) {
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [roleError, setRoleError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState('');


    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!role) {
            setRoleError(true);
            return;
        }

        setRoleError(false);

        try {

            const response = await axios.post('http://localhost:3000/signIn', {
                email,
                password,
                role

            });

            localStorage.setItem('token', response.data.token);
            setEmail('');
            setPassword('');

            if (role == 'patient')
                return navigate('/patient');

            else if (role == 'caregiver')
                return navigate('/caregiver');
        }
        catch (e) {
console.log(e);
        }


    }


    return (

        <div>

            <form onSubmit={handleSignIn} className='shadow-lg shadow-indigo-200 w-sm rounded-lg p-5 bg-white'>
                <div className='flex flex-row justify-end'>
                    <button className={`rounded-full ring-1 ring-gray-300 p-3  my-3 mx-3 font-bold text-md font-serif w-fit focus:translate-0.5
                    ${role == 'patient' ? 'bg-violet-400' : ' bg-violet-300 hover:bg-indigo-100'}`}
                        onClick={() => setRole('patient')}
                    >Patient
                    </button>
                    <button className={`rounded-full ring-1 ring-gray-300 p-3  my-3 font-bold text-md font-serif mx-7 w-fit focus:translate-0.5
                     ${role == 'caregiver' ? 'bg-violet-400' : 'bg-violet-300 hover:bg-indigo-100'}`}
                        onClick={() => setRole('caregiver')}
                    >Caregiver
                    </button>
                    <button className='ring-2 ring-gray-300 rounded-full font-bold text-xl w-8 h-8 hover:bg-gray-200 focus:translate-0.5'
                        onClick={onCloseClick}
                    >&times;</button>
                </div>

                <div className='flex flex-col items-center'>
                    <label htmlFor="Email" className='block my-3 font-bold font-serif'>Email</label>
                    <input type="email" className='outline-3 outline-offset-2 outline-double outline-indigo-500 w-xs font-serif font-normal rounded-sm px-2 focus:shadow-xl'
                        name='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='Email'
                        placeholder='Johndoe@gmail.com'
                        required
                    />

                    <label htmlFor="pass" className='block my-3 font-bold font-serif'>Password</label>
                    <input type="password" className='outline-3 outline-offset-2 outline-double outline-indigo-500 w-xs rounded-sm px-2 focus:shadow-xl'
                        name='password'
                        id='pass'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='xxxxxxxx'
                        required
                    />

                    {roleError && <p className='font-serif font-bold text-violet-500 my-3'>Please Select a Role!</p>}

                    <br />

                    <button type='submit' className='font-bold font-serif text-md bg-indigo-300 p-3 cursor-pointer rounded-lg outline-3 
                    outline-offset-2 outline-double outline-indigo-500 hover:bg-indigo-200 focus:translate-0.5'>
                        SignIn
                    </button>

                    {res && <p className='font-serif font-bold text-violet-500 my-3'>{res}</p>}

                </div>
            </form>
        </div>
    )
}







export default SignIn
