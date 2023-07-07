import Image from 'next/image';
import React from 'react';
import videochatImg from '../public/assets/projects/videochat.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const videochat = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 backdrop-blur-sm' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={videochatImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Video Chat</h2>
          <h3>Vue JS / Web RTC</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p> 
            The Vue.js video chat app is a cutting-edge application that leverages Vue.js and WebRTC technology to enable seamless video communication. This app provides users with a reliable and secure platform for real-time video calls and conferencing.

            Built using Vue.js, a progressive JavaScript framework, the app offers a smooth and interactive user interface. Vue.js allows for the creation of dynamic components and ensures efficient rendering, resulting in a responsive video chat experience. Its component-based architecture enhances code reusability and simplifies maintenance.

            WebRTC, a powerful web standard for real-time communication, forms the backbone of the video chat functionality. It enables peer-to-peer video streaming directly between users&apos; devices, eliminating the need for intermediaries. This ensures low latency and high-quality video and audio transmission, even in large-scale video conferences.

            The Vue.js video chat app supports essential features such as video calling, screen sharing, text chat, and user presence indicators. It also provides options for managing participants, muting audio, and adjusting video settings. The app prioritizes security and privacy, incorporating encryption protocols to safeguard user communications.

            With the combination of Vue.js and WebRTC, this video chat app delivers a seamless and feature-rich video communication experience. Whether it&apos;s for personal or professional use, users can rely on this app to connect with others effortlessly and enjoy high-quality video interactions.
            </p>
          <a
            href='https://github.com/Shivang-stack/WebrtcApp'
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
                <RiRadioButtonFill className='pr-1' /> Vue Js
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Web RTC
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

export default videochat;