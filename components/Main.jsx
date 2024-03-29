import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-300'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-200'>
            Hi, I&#39;m <span className='text-[#cfbaec]'> Shivang</span>
          </h1>
          <h1 className='py-2 text-gray-300'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-200 max-w-[70%] m-auto'>
            I&#39;m a Full-stack web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&#39;m focused on building responsive Full-stack web applications while
            learning New technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://www.linkedin.com/in/shivangyadav16/'>
                                <FaLinkedinIn/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://github.com/Shivang-stack'>
                                <FaGithub/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://mail.google.com/mail/u/shivang1691401@gmail.com'>
                                <AiOutlineMail/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://drive.google.com/file/d/1eAITCDdjJdnqHTgvhHo5pUToabFsdUqD/view?usp=sharing'>
                                <BsFillPersonLinesFill/>
                                </Link>
                                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
