import Image from 'next/image';
import React from 'react';
import newsappImg from '../public/assets/projects/NewsForYou.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const newssite = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 backdrop-blur-sm' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={newsappImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>News Website News For You</h2>
          <h3>React JS / OpenNews.Org APi</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p> 
            NewsForYou is a dynamic news website built using React.js and powered by the OpenNews.org API. It provides users with up-to-date and relevant news articles from various sources across different categories. 

            The frontend of NewsForYou is developed using React.js, a popular JavaScript library for building user interfaces. It offers a seamless and responsive user experience, allowing users to easily navigate through news articles and explore different categories. React components are utilized to create modular UI elements, enhancing code reusability and maintainability.

            The OpenNews.org API serves as the backend for NewsForYou, providing a vast collection of news articles from reputable sources. The API offers a range of endpoints to fetch news articles based on categories, keywords, and other parameters. NewsForYou leverages this API to retrieve and display the latest news content for users.

            NewsForYou allows users to browse news articles by category, search for specific topics, and view detailed article information. The website offers features such as article bookmarking, sharing options, and personalized recommendations based on user preferences. It also provides a clean and intuitive user interface for an enjoyable reading experience.

            By combining the power of React.js and the OpenNews.org API, NewsForYou offers a user-friendly and efficient platform for staying informed about current events. Whether youre interested in technology, sports, politics, or entertainment, NewsForYou provides a comprehensive news experience tailored to your interests. Stay updated with NewsForYou and never miss out on the latest news that matters to you.
            </p>
          <a
            href='https://github.com/Shivang-stack/NewsForYou-web'
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
                <RiRadioButtonFill className='pr-1' /> React Js
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenNews.org API
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

export default newssite;