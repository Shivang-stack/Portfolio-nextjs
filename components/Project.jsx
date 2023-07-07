import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import animekartImg from '../public/assets/projects/AnimeKart.png';
import chatappImg from '../public/assets/projects/charlando-web.png'
import newsappImg from '../public/assets/projects/NewsForYou.png'
import videochatImg from '../public/assets/projects/videochat.png'
import weatherAppImg from '../public/assets/projects/weatherapp.png'
import bbsrs from '../public/assets/projects/BBSRS.png'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#cfbaec]'>
          Projects
        </p>
        <h2 className='py-4'>What I&#39;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='E-commerce website'
            backgroundImg={animekartImg}
            projectUrl='/animekart'
            tech = 'MERN'
          />
          <ProjectItem
            title='Chat App'
            backgroundImg={chatappImg}
            projectUrl='/chatapp'
            tech = 'React Js'
          />
          <ProjectItem
            title='News Website'
            backgroundImg={newsappImg}
            projectUrl='/newssite'
            tech = 'React Js'
          />
          <ProjectItem
            title='Video Chat'
            backgroundImg={videochatImg}
            projectUrl='/videochat'
            tech = 'Vue Js'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherAppImg}
            projectUrl='/weatherapp'
            tech = 'Flutter'
          />
          <ProjectItem
            title='Blockchain based Student Reward System'
            backgroundImg={bbsrs}
            projectUrl='/bbsrs'
            tech = 'MERN'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
