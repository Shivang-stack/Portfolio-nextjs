import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";

import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzucUGg9xK1lTG9AWh0kRglTbBVmn1oFogYScEv-aaKcVBMMK_m0uO2QB2xGH2Rq4W0bQ/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log(result);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    }
  };
  

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#cfbaec]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl  rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Shivang yadav</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&#39;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://www.linkedin.com/in/shivangyadav16/'>
                                <FaLinkedinIn/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://github.com/Shivang-stack'>
                                <FaGithub/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://mail.google.com/mail/u/shivang1691401@gmail.com'>
                                <AiOutlineMail/>
                                </Link>
                                
                                </div>
                                <div className=' rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://drive.google.com/file/d/1eAITCDdjJdnqHTgvhHo5pUToabFsdUqD/view?usp=sharing'>
                                <BsFillPersonLinesFill/>
                                </Link>
                                </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex bg-white text-black'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input
                      className='border-2 rounded-lg p-3 flex bg-white text-black'
                      type='text'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex bg-white text-black'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex bg-white text-black'
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 bg-white text-black'
                    rows='10'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className='w-full p-4 shadow-xl text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <div className='rounded-full shadow-xl shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp className='text-[#cfbaec]' size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
