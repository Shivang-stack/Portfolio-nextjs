import Image from 'next/image';
import React from 'react';
import BBSRSImg from '../public/assets/projects/BBSRS.png';
import BBSRSImg1 from '../public/assets/projects/BBSRS1.png';
import BBSRSImg2 from '../public/assets/projects/BBSRS2.png';
import BBSRSImg3 from '../public/assets/projects/BBSRS3.png';
import BBSRSImg4 from '../public/assets/projects/BBSRS4.png';
import BBSRSImg5 from '../public/assets/projects/BBSRS5.png';
import BBSRSImg6 from '../public/assets/projects/BBSRS6.png';

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const bbsrs = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 backdrop-blur-sm' />
        <Image
          className='absolute z-1  '
          layout='fill'
          objectFit='cover'
          src={BBSRSImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Blockchain Based Student Reward System</h2>
          <h3>React JS / Express Js / Node js / Mongo DB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h3>Project</h3>
          <h2>Overview</h2>
          <p> 
            Student engagement is a crucial aspect of the learning experience, as it enhances academic success, personal growth, 
            and overall campus culture. However, traditional methods of tracking and incentivizing student engagement can be 
            inefficient and ineffective. In recent years, there has been growing interest in using blockchain technology to create 
            a more decentralized, transparent, and secure system for managing student engagement. 
            One such approach is a blockchain-based student engagement program, where students earn tokens for attending 
            events, participating in fests, and other activities that promote learning and personal development. The tokens can be 
            redeemed for rewards such as discounts, free tickets, or exclusive access to campus facilities. This approach not only 
            incentivizes student engagement but also creates a culture of accountability, recognition, and community building. 
            To implement this program, the college can develop a set of criteria for earning tokens. For instance, students can 
            earn tokens for attending college events such as sports tournaments, music concerts, and guest lectures. Likewise, 
            students can earn tokens for volunteering work for the college or participating in academic achievements such as 
            writing papers, making presentations, or achieving good grades. 
            To ensure transparency, the blockchain can be used to record the number of tokens each student has earned. of, an 
            incentive-based system can be employed, where students earn rewards for performing certain activities.
          </p>
          <a
            href='https://github.com/Shivang-stack/Blockchain-based-student-reward-system.git'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='http://ijariie.com/FormDetails.aspx?MenuScriptId=219057'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Published Article</button>
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
        <div className='col-span-4 p-3'>
            <h2 className='py-3'>Images</h2>
            <Image
                className='rounded-xl p-5 '
                src={BBSRSImg}
                alt='/'
            />
            <Image
                className='rounded-xl p-5'
                src={BBSRSImg1}
                alt='/'
            />
            <Image
                className='rounded-xl p-5'
                src={BBSRSImg2}
                alt='/'
            />
            <Image
                className='rounded-xl p-5'
                src={BBSRSImg3}
                alt='/'
            />
            <Image
                className='rounded-xl p-5'
                src={BBSRSImg4}
                alt='/'
            />
            <Image
                className='rounded-xl p-5'
                src={BBSRSImg5}
                alt='/'
            />
            <Image
                className='rounded-xl p-5'
                src={BBSRSImg6}
                alt='/'
            /> 
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer button'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default bbsrs;