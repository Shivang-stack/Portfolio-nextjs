import Image from 'next/image';
import React from 'react';
import weatherAppImg from '../public/assets/projects/weatherapp.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const weatherapp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 backdrop-blur-sm' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={weatherAppImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Weather APP</h2>
          <h3>Flutter / OpenWeather.Org APi</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Flutter Weather app is a mobile application designed to provide users with accurate weather information using the OpenWeather.org API. Developed using the Flutter framework, the app offers a seamless and intuitive user experience across different mobile platforms.

            By integrating the OpenWeather.org API, the app fetches real-time weather data for various locations worldwide. Users can view current weather conditions, temperature, humidity, wind speed, and other relevant information. The app also provides forecasts for upcoming days, allowing users to plan their activities accordingly.

            The Flutter Weather app offers a visually appealing and user-friendly interface. Users can easily search for locations, add favorites, and customize their weather preferences. The app supports features like weather notifications, interactive maps, and hourly forecasts, ensuring that users stay informed about weather changes.

            With its cross-platform compatibility and reliance on the OpenWeather.org API, the Flutter Weather app delivers accurate and timely weather updates to users on the go. Stay prepared and make informed decisions with the Flutter Weather app.
            </p>
          <a
            href='https://github.com/Shivang-stack/weatherapp'
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
                <RiRadioButtonFill className='pr-1' /> Flutter
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenWeather.org API
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

export default weatherapp;