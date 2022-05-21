import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import animekartImg from '../public/assets/projects/AnimeKart.png';
import chatappImg from '../public/assets/projects/charlando-web.png'
import newsappImg from '../public/assets/projects/NewsForYou.png'
import videochatImg from '../public/assets/projects/videochat.png'
import weatherAppImg from '../public/assets/projects/weatherapp.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#50a4d1]'>
          Projects
        </p>
        <h2 className='py-4'>What I&#39;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='E-commerce website'
            backgroundImg={animekartImg}
            projectUrl='/animekart'
          />
          <ProjectItem
            title='Chat App'
            backgroundImg={chatappImg}
            projectUrl='/chatapp'
          />
          <ProjectItem
            title='News Website'
            backgroundImg={newsappImg}
            projectUrl='/newswebsite'
          />
          <ProjectItem
            title='Video Chat'
            backgroundImg={videochatImg}
            projectUrl='/videochat'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherAppImg}
            projectUrl='/weatherapp'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
