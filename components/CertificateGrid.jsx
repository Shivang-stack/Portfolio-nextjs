import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Certificate } from './Certificate';

const CertificateGrid = () => {
  return (
    <div id='certificates' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#cfbaec]'>
          Certificates
        </p>
        <h2 className='py-4'>What I&#39;ve Learned</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000} // Change the interval as per your preference
          stopOnHover={true}
          transitionTime={500}
          emulateTouch={true}
          swipeable={true}
          showArrows={false} // If you want to display arrows, change this to true
        >
          <Certificate
            platform='Udemy'
            title='Test Case Management'
            issue_on='Issued June 2023' 
            credentials='UC-d4ef67cc-2af2-48af-bf48-7c365d3ae4a7'
            CertificateImg='https://udemy-certificate.s3.amazonaws.com/image/UC-d4ef67cc-2af2-48af-bf48-7c365d3ae4a7.jpg'
            Url='https://www.udemy.com/certificate/UC-d4ef67cc-2af2-48af-bf48-7c365d3ae4a7/'
          />
          <Certificate
            platform='Udemy'
            title='Build a blockchain and crypto currency | Full stack version'
            issue_on='Issued May 2023' 
            credentials='UC-14da0c8f-e0d6-4eca-8260-d82d3c9d10b7'
            CertificateImg='https://udemy-certificate.s3.amazonaws.com/image/UC-14da0c8f-e0d6-4eca-8260-d82d3c9d10b7.jpg'
            Url='https://www.udemy.com/certificate/UC-14da0c8f-e0d6-4eca-8260-d82d3c9d10b7/'
          />
          <Certificate
            platform='Udemy'
            title='Monorepos - A beginners guide '
            issue_on='Issued Apr 2023' 
            credentials='UC-6940f24b-7381-4609-aee6-c7518152a698'
            CertificateImg='https://udemy-certificate.s3.amazonaws.com/image/UC-6940f24b-7381-4609-aee6-c7518152a698.jpg'
            Url='https://www.udemy.com/certificate/UC-6940f24b-7381-4609-aee6-c7518152a698/'
          />
          <Certificate
            platform='Udemy'
            title='Datadog: Performance monitoring tool (from Zero to Hero)'
            issue_on='Issued May 2023' 
            credentials='UC-9e4d1839-f50b-4d7e-b5cf-734f6b62a736'
            CertificateImg='https://udemy-certificate.s3.amazonaws.com/image/UC-9e4d1839-f50b-4d7e-b5cf-734f6b62a736.jpg'
            Url='https://www.udemy.com/certificate/UC-9e4d1839-f50b-4d7e-b5cf-734f6b62a736/'
          />
          <Certificate
            platform='Udemy'
            title='Flutter - Intermediate'
            issue_on='Issued Mar 2023' 
            credentials='UC-aa8183c9-9984-4aa4-a79f-4e7483229f6a'
            CertificateImg='https://udemy-certificate.s3.amazonaws.com/image/UC-aa8183c9-9984-4aa4-a79f-4e7483229f6a.jpg'
            Url='https://www.udemy.com/certificate/UC-aa8183c9-9984-4aa4-a79f-4e7483229f6a/'
          /> 
          <Certificate
            platform='Udemy'
            title='Introduction to SAN and NAS Storage'
            issue_on='Issued Mar 2023' 
            credentials='UC-780595c4-f737-42da-8df5-7cfcc41bd1d1'
            CertificateImg='https://udemy-certificate.s3.amazonaws.com/image/UC-780595c4-f737-42da-8df5-7cfcc41bd1d1.jpg'
            Url='https://www.udemy.com/certificate/UC-780595c4-f737-42da-8df5-7cfcc41bd1d1/'
          />
          <Certificate
            platform='LearnCodeOnline.in'
            title='LCO Mern Bootcamp course'
            issue_on='Issued Apr 2022' 
            credentials='49208535033224101056'
            CertificateImg='https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/50332/4920853_50332.png'
            Url='https://courses.learncodeonline.in/learn/certificate/4920853-50332'
          />
          <Certificate
            platform='Coursera'
            title='Crash Course on Python'
            issue_on='Issued May 2021' 
            credentials='Q36CRFKQECWD'
            CertificateImg='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Q36CRFKQECWD/CERTIFICATE_LANDING_PAGE~Q36CRFKQECWD.jpeg'
            Url='https://www.coursera.org/account/accomplishments/verify/Q36CRFKQECWD'
          />
          <Certificate
            platform='Coursera'
            title='The Bits and Bytes of Computer Networking'
            issue_on='Issued Aug 2020' 
            credentials='HKDPS74X262B'
            CertificateImg='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HKDPS74X262B/CERTIFICATE_LANDING_PAGE~HKDPS74X262B.jpeg'
            Url='https://www.coursera.org/account/accomplishments/verify/HKDPS74X262B'
          />
          <Certificate
            platform='Coursera'
            title='Technical Support Fundamentals'
            issue_on='Issued Jul 2020' 
            credentials='VA4KEGTFB45A'
            CertificateImg='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VA4KEGTFB45A/CERTIFICATE_LANDING_PAGE~VA4KEGTFB45A.jpeg'
            Url='https://www.coursera.org/account/accomplishments/verify/VA4KEGTFB45A'
          />
          <Certificate
            platform='Coursera'
            title='Operating System and You : Becoming Power User'
            issue_on='Issued Aug 2020' 
            credentials='N4W59LVBML85'
            CertificateImg='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~N4W59LVBML85/CERTIFICATE_LANDING_PAGE~N4W59LVBML85.jpeg'
            Url='https://www.coursera.org/account/accomplishments/verify/N4W59LVBML85'
          />
          <Certificate
            platform='University of London'
            title='Introduction to Virtual realityIntroduction to Virtual reality'
            issue_on='Issued Jul 2020' 
            credentials='47ARZ977GVGG'
            CertificateImg='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~47ARZ977GVGG/CERTIFICATE_LANDING_PAGE~47ARZ977GVGG.jpeg'
            Url='https://www.coursera.org/account/accomplishments/verify/47ARZ977GVGG'
          />
          {/* <Certificate
            platform='LinkedIn'
            title='Learning Python'
            issue_on='Issued Jul 2020' 
            credentials='click link'
            CertificateImg='https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~47ARZ977GVGG/CERTIFICATE_LANDING_PAGE~47ARZ977GVGG.jpeg'
            Url='https://www.linkedin.com/learning/certificates/97c2cbfd68390ec3b731b2304dd26631b4ebd3608e18767b78649608a8bcc5b5?trk=backfilled_certificate'
          /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default CertificateGrid;
