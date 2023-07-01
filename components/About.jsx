import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Profile from '../public/assets/shivang.png';
import Resume from '../public/assets/resume.pdf';

const About = () => {
  return (
    <section>
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#cfbaec]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-300'>
            Highly motivated Computer Science professional with a strong programming background and a Bachelor&#39;s degree in Engineering from AMC Engineering College. Skilled in JavaScript, Java, C, Python, C++, and Dart, with experience in React, Node.js, Flutter, and databases such as Postgres and MongoDB. Currently a SaaS Intern at Movella, automating NSRs and handling Testing, Data Analysis & video integration operations. Previous experience includes Backend Development and technical roles at Pysphere and YesMentor. Strong leadership skills demonstrated as WebMaster of the IEEE Student Branch and Technical Head of ACSESS - CSE Student Forum. Seeking challenging opportunities to drive innovation and growth.
          </p>
          <Link href='https://github.com/Shivang-stack?tab=repositories'>
            <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p>
          </Link>
          <a href={Resume} download>
            <button className='py-2 px-4 mt-4 text-white  rounded-md'>
              Download Resume
            </button>
          </a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center  hover:scale-105 ease-in duration-300'>
          <Image className='rounded-lg' src={Profile} alt='/' /> 
        </div>
      </div>
    </div>
    <div
    className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
    style={{
      background:
        "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
    }}
  ></div>
  </section>
  );
};

export default About;
