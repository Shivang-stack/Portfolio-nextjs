import React from 'react';
import ExperienceComponent from './ExperianceItem'
import movella from '../public/assets/company/movella.jpg'
import yesmentor from '../public/assets/company/yesmentor.jpg'
import pysphere from '../public/assets/company/pysphere.svg' 
import bdiplus from '../public/assets/company/bdiplus.jpeg'
const MyProfilePage = () => {
  const experiences = [
    {
      companyLogo: bdiplus,
      position: 'SDE , BDIplus',
      description: 'Successfully led the retail development team at ModenX, delivering innovative phygital solutions for a seamless customer experience. Implemented Business Insights to enhance in-store customer engagement and drive sales. Managed Retail Side, overseeing development, testing, and deployment of retail applications.Collaborated with cross-functional teams to ensure alignment with business objectives and customer needs.',
    },
    {
        companyLogo: movella,
        position: 'SDE , Movella Inc',
        description: 'Collaborating with the QA Team to conduct thorough testing on testrail.Utilizing data analytics techniques to support the development of the Minimum Viable Product (MVP).Leveraging Datadog, a powerful data analytics platform, to extract valuable insights for enhancing product functionality and performance. Working on the integration of video capabilities to ensure seamless incorporation of this feature into the product.Contributing to the company objective of delivering a high-quality, efficient, and feature-rich solution to customers through diligent testing and analysis.',
      },
    {
        companyLogo: pysphere,
        position: 'Full Stack Intern , Pysphere Technologies LLP',
        description: 'Oversee back-end development using Java Springboot to maintain website integrity, security and efficiency.Build databases and table structures following architecture methodology for web applications.',
    },
    {
        companyLogo: yesmentor,
        position: 'Full Stack Intern , YesMentor Pvt Ltd',
        description: 'Developed features such as AudioBook, Blogs And Podcast with node js and express js .Developed a nodejs app with postgres for YesMentor users to keep up with there progress on app',
    },
    // Add more experience objects as needed
  ];

  return (
    <div id='myprofilepage' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#cfbaec]'>Professional Journey</p>
            <h2 className='py-4'>My Experience</h2>
            {experiences.map((experience, index) => (
                <ExperienceComponent
                key={index}
                companyLogo={experience.companyLogo}
                position={experience.position}
                description={experience.description}
                />
            ))}
        </div>
    </div>
  );
};

export default MyProfilePage;
//AKfycbzucUGg9xK1lTG9AWh0kRglTbBVmn1oFogYScEv-aaKcVBMMK_m0uO2QB2xGH2Rq4W0bQ
//https://script.google.com/macros/s/AKfycbzucUGg9xK1lTG9AWh0kRglTbBVmn1oFogYScEv-aaKcVBMMK_m0uO2QB2xGH2Rq4W0bQ/exec