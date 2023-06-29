import React from 'react';
import Image from 'next/image'


const ExperienceComponent = ({ companyLogo, position, description }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className="grid items-center ">
        <div className="">
          <Image
            className='rounded-full ring-[#50d71e]'
            src={companyLogo}
            width='100px'
            height='100px'
            alt='/'
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{position}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
