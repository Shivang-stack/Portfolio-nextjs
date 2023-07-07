import Image from 'next/image';
import React from 'react';
import animekartImg from '../public/assets/projects/AnimeKart.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const animekart = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 backdrop-blur-sm' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={animekartImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>E- Commerce Website Animekart</h2>
          <h3>React JS / Express Js / Node js / Mongo DB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Animekart T-Shirt Store is an e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It offers a wide range of anime-themed t-shirts for anime enthusiasts. The website provides a user-friendly interface with features such as browsing the collection, adding items to the shopping cart, user authentication, order tracking, and secure payment options. The frontend is built with React.js, ensuring a responsive and interactive experience, while the backend is powered by Node.js and Express.js, handling user accounts, orders, and database interactions. MongoDB serves as the database for storing product information, user details, and order data. The project combines the advantages of the MERN stack to deliver a seamless e-commerce experience for anime fans.
          </p>
          <a
            href='https://github.com/Shivang-stack/Mini-project-Animekart'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-800 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mongo DB
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express Js
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node js
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default animekart;