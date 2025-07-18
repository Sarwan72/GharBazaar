import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
         <Link to='/'>
         <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-600'>Ghar</span>
            <span className='text-slate-800'>Bazaar</span>
        </h1>
         </Link>
        <form className='bg-slate-100 flex items-center p-3 rounded-lg'>
            <input type="text" className='bg-transparent outline-none w-24 sm:w-64 ' placeholder='Search...' />
            <FaSearch className='text-slate-700'/>
        </form>
        <ul className='flex gap-4 text-lg'>
            <Link to='Home'>
            <li className='hidden sm:inline text-slate-700 hover:underline '>Home</li>
            </Link>
            <Link to='About'>
            <li className='hidden sm:inline text-slate-700 hover:underline '>About</li>
            </Link>
            <Link to='/profile'>
            {currentUser ? (

             <img className='w-8 h-8  rounded-full ' src={currentUser.avatar} alt='profile' />
            ): (
            <li className='sm:inline text-slate-700 hover:underline '>Sign-in</li>
            
            )
            }
            
            </Link>
        </ul>
        
       </div>
    </header>
  )
}

export default Header