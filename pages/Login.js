import React from 'react';

export default function Login() {
  return (
    <div className='flex items-center justify-center w-full min-h-screen bg-gray-900'>
      <div className='relative w-[380px] h-[420px] bg-gray-800 rounded-lg overflow-hidden'>
        <div className='origin-bottom-right abusolute w-[380px] h-[420px] bg-gradient-to-r from-lime-400 via-lime-400 to-transparent -top-[50%] -left-[50%] animate-spin-slow'></div>
        <div className='origin-bottom-right abusolute w-[380px] h-[420px] bg-gradient-to-r from-lime-400 via-lime-400 to-transparent -top-[50%] -left-[50%] animate-spin-delay'></div>
        <div className='absolute z-10 p-5 bg-gray-800 rounded-lg inset-1'>
          <form>
            <h2 className='text-xl font-semibold text-center text-lime-400'>
              Sign In
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}
