"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import usersData from './users.json';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = usersData.users.find((user: any) => user.username === username);
    if (!user) {
      setError('User not found');
      return;
    }
    if (user.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    router.push('/accounts');
  };
  

  const date = new Date();
  const hour = date.getHours();
  return (
    <div className=''>
      <Header />
      <div className='h-screen bg-white'>
        <div>
        {error && <p>{error}</p>}
        </div>
        <div className="">
          <div className="text-center text-[#333131] flex flex-col gap-5 text-[25px] font-semibold leading-[25px] pt-8 mb-8">
            {hour >= 12 ? (hour >= 17 ? <h2>Good Evening</h2> : <h2>Good Afternoon</h2>) : <h2>Good Morning</h2>}
            <span className='text-xl font-normal'>Sign on to manage your accounts</span>
          </div>
          <div className="bg-white mx-auto rounded-xl max-w-[400px] p-7">
            <form onSubmit={handleLogin}>
              <div className='flex flex-col gap-2'>
                <input type="text" value={username} placeholder='Username' className='p-5 bg-transparent pl-0 pb-5 pt-11 border-b border-b-gray-300 outline-none'
                onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <input type="text" value={password} placeholder='Password' className='p-5 bg-transparent pl-0 pb-5 pt-11 border-b border-b-gray-300 outline-none'
                onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className='flex flex-col gap-2 mt-12'>
                <button type='submit' className="p-4 bg-[#d71e28] mx-auto rounded-full w-[200px] text-white">Sign on</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
