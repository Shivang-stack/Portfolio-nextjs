import Image from 'next/image';
import React from 'react';
import animekartImg from '../public/assets/projects/AnimeKart.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const chatapp = () => {
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
          <h2 className='py-2'>Chat App Charlando</h2>
          <h3>React JS / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p> 
            Charlando is a group chat application built using React.js and Firebase. It offers users a platform to engage in real-time conversations with friends, family, or colleagues. The app provides a simple and intuitive interface for sending messages, sharing files, and staying connected with others.

            React.js, a popular JavaScript library, is used to create the frontend of the application. It enables the development of interactive and responsive user interfaces, ensuring a smooth user experience. React components are utilized to build reusable UI elements, making the codebase modular and maintainable.

            Firebase, a comprehensive backend platform, powers the real-time functionality of Charlando. It provides a scalable and secure infrastructure to handle the chat data. Firebase&apos;s real-time database allows messages to be instantly synchronized across all devices, ensuring that users receive messages in real-time. Additionally, Firebase Authentication is used for user authentication, enabling secure access to the chat app.

            Charlando allows users to create chat groups, join existing ones, and participate in conversations with group members. Users can send text messages, share images or files, and view message history within the chat groups. The app also supports features like notifications to keep users updated on new messages, as well as user profile customization.

            By leveraging React.js and Firebase, Charlando offers a user-friendly and efficient group chat experience. Whether it&apos;s for personal or professional use, Charlando enables seamless communication and collaboration among users. Stay connected and engage in lively conversations with Charlando!
            </p>
          <a
            href='https://github.com/Shivang-stack/charlando-web'
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
                <RiRadioButtonFill className='pr-1' /> Firebase
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

export default chatapp;