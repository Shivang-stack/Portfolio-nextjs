import React from 'react';
import Image from "next/image";
import Link from "next/link"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#54cfdf]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-300'> I am not your normal developer</p>
          <p className='py-2 text-gray-300'>
          I started my programming journey in 9th standard with Java, 
          developed some small project for school compitions. As the President of Computer Club of my school i organized some Coding compitions as well as 
          quiz compition where we use the quiz app devloped by me.
          </p>
          <p className='py-2 text-gray-300'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with React JS, MongoDB, Firebase, Postgres ,and
            learning new technologies.
          </p>
          <Link href='https://github.com/Shivang-stack?tab=repositories'>
          <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p>
          </Link>
          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
