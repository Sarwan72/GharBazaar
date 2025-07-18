import React from 'react'
import { useSelector } from 'react-redux';


const Profile = () => {
  const {currentUser}= useSelector((state) => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold  my-7'>Profile Page</h1>
          <form>
        <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
        <input type="text" placeholder='username' className='border border-gray-300 p-2 rounded-md w-full mt-2' id='username' />
        <input type="text" placeholder='email' className='border border-gray-300 p-2 rounded-md w-full mt-2' id='email' />
        <input type="text" placeholder='password' className='border border-gray-300 p-2 rounded-md w-full mt-2' id='password' />
        <button className='bg-slate-700 mt-3 text-white rounded-lg p-3 w-full uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
  

      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='cursor-pointer text-red-700'>Sign out</span>
      </div>
    </div>
  )
}

export default Profile