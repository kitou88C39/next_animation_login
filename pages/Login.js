import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { error },
  } = useForm();
  return (
    <div className='flex items-center justify-center w-full min-h-screen bg-gray-900'>
      <div className='relative w-[380px] h-[420px] bg-gray-100 rounded-lg overflow-hidden'>
        <div className='origin-bottom-right abusolute w-[380px] h-[420px] bg-gradient-to-r from-lime-400 via-lime-400 to-transparent -top-[50%] -left-[50%] animate-spin-slow'></div>
        <div className='origin-bottom-right abusolute w-[380px] h-[420px] bg-gradient-to-r from-lime-400 via-lime-400 to-transparent -top-[50%] -left-[50%] animate-spin-delay'></div>
        <div className='absolute z-10 p-5 bg-gray-600 rounded-lg inset-1'>
          <form onSubmit={handleSubmit}>
            <h2 className='mb-12 text-xl font-semibold text-center text-lime-400'>
              Sign In
            </h2>
            <div className='relative flex flex-col mb-12'>
              <input
                type='email'
                id='email'
                autoFocus
                placeholder=''
                className='relative z-10 h-10 px-2 text-gray-100 bg-transparent border-0 border-b-2 outline-none border-lime-400 peer'
                {...register('email', {
                  required: 'please enter email',
                  pattern: {
                    //value:バリデーション
                    message: 'Please enter vaild email',
                  },
                })}
              />
              {error.email && (
                <div className='text-xs text-red-500 absolute-bottom-5'>
                  {errors.email.message}
                </div>
              )}
              <i
                className='absolute bottom-0 left-0 w-full h-10 duration-500 origin-bottom transform rounded bg-lime-400 -z-10
              peer-focus:h-10 placeholder-shown:h-[0.5px]'
              />
              <label
                className='peer-focus:font-medium absolute text-sm  duration-500 transform -translate-y-8 scale-75  
              top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-400 text-lime-400 peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8'
              >
                Enter Email
              </label>
            </div>
            <div className='relative flex flex-col mb-12'>
              <input
                type='password'
                id='password'
                autoFocus
                placeholder=''
                className='relative z-10 h-10 px-2 text-gray-100 bg-transparent border-0 border-b-2 outline-none border-lime-400 peer'
                {...register('password', {
                  required: 'please enter password',
                  pattern: {
                    //value:バリデーション
                    message: 'Please enter vaild password',
                  },
                })}
              />
              {error.password && (
                <div className='text-xs text-red-500 absolute-bottom-5'>
                  {errors.password.message}
                </div>
              )}
              <i
                className='absolute bottom-0 left-0 w-full h-10 duration-500 origin-bottom transform rounded bg-lime-400 -z-10
              peer-focus:h-10 placeholder-shown:h-[0.5px]'
              />
              <label
                className='peer-focus:font-medium absolute text-sm  duration-500 transform -translate-y-8 scale-75  
              top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-400 text-lime-400 peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8'
              >
                Enter Password
              </label>
            </div>
            <button
              type='submit'
              className='w-full py-3 text-gray-100 duration-300 rounded bg-lime-400 hover:bg-lime-400 hover-scale-105'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
