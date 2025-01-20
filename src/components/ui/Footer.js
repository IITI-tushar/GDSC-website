'use client';
import React from 'react';
// import '../css/Footer.css'
const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-8 lg:px-8 backdrop-blur-lg bg-white/20 text-black">
      <div className="flex justify-between flex-col space-x-8 sm:flex-row lg:flex-row">
        <div className="flex items-start justify-center mb-10 sm:justify-start">
          <div className="inline-flex items-center">
            <img 
              src="https://tse2.mm.bing.net/th?id=OIP.Fcoq7rRFrtMVE6JZnLuZiAHaHa&pid=Api&P=0&h=180"
              alt="Logo" 
              className="h-48 w-48 mr-2" 
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-96 sm:ml-4">
          <span className=" font-extrabold text-2xl mb-4 w-20">Contact</span>
          <div className="flex flex-col ">
            <div className="flex">
              <p className="mr-1 font-bold">Email:</p>
              <div>
                gdsc@iiti.ac.in
              </div>
            </div>
            <div className="flex">
              <p className="mr-1 font-bold">Address:</p>
              <div className='text-left'>
                Indian Institute of Technology-Indore, Khandwa Rd, Simrol, Madhya Pradesh 453552
              </div>
            </div>
          </div>
        </div>
        <div className='social'>
          <span className="font-extrabold text-2xl w-16">Social</span>
          <div className="flex flex-col mt-3 space-y-2">
            <a href="" className="flex items-center text-gray-500 transition-colors duration-300 hover:text-red">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6 mr-2">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
              Instagram
            </a>
            <a href="" className="flex items-center text-gray-500 transition-colors duration-300 hover:text-[rgba(34,197,94,255)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 mr-2">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
              </svg>
              Facebook
            </a>
            <a href="" className="flex items-center text-gray-500 transition-colors duration-300 hover:text-[#2563EB]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 mr-2">
                <path d="M19.5 0h-15C2.01 0 0 2.01 0 4.5v15C0 21.99 2.01 24 4.5 24h15c2.49 0 4.5-2.01 4.5-4.5v-15C24 2.01 21.99 0 19.5 0zM8.77 20.44H5.84V9.8h2.93v10.64zM7.3 8.73c-0.93 0-1.68-0.76-1.68-1.69s0.76-1.69 1.68-1.69c0.93 0 1.68 0.76 1.68 1.69S8.23 8.73 7.3 8.73zM20.45 20.44h-2.93v-5.49c0-1.31-0.03-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.92v5.58h-2.93V9.8h2.82v1.45h0.04c0.39-0.74 1.34-1.52 2.77-1.52 2.97 0 3.52 1.95 3.52 4.48v6.25h0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t">
        <p className="text-sm text-gray-400 text-center">
          By GDSC Team 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;