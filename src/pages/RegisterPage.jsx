import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around' >
    <div className='mb-64'>
     <h1 className='text-4xl text-center mb-4'>Register</h1>
     <form className='max-w-md mx-auto '>
        <input className='w-full border my-2 py-2 px-3 rounded-lg' type="text" placeholder='username'/>
       <input className='w-full border my-2 py-2 px-3 rounded-lg' type="email" placeholder='your@email.com' />
       <input className='w-full border my-2 py-2 px-3 rounded-lg'type="password" placeholder='password' />
       <button className='bg-gray-300 primary p-2 w-full text-white rounded-full'>Login</button>
       <div className='text-center py-2 text-gray-500'>
        Already a member? <Link className='underline text-bn' to={'/login'}>Login</Link>
       </div>
     </form>
     </div>
  </div>
  )
}

export default RegisterPage