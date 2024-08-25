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
          As a dedicated Software Development Engineer, I have built a solid foundation through a series of impactful internships and my current role. My journey began with internships at YesMentor, Pysphere, and Movella, where I honed my skills and gained diverse experiences in software engineering. Currently, I am contributing to BDIplus, where I am actively involved in building ModenX, a cutting-edge project. I am passionate about developing innovative solutions and continuously advancing my expertise in the field
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
