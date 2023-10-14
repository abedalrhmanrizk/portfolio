'use client';
import { useSectionInActive } from '@/hooks/hooks';
import React from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
function Contact() {
  const { ref } = useSectionInActive('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='w-[min(100%,50rem)] '
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className='text-gray-700 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='abedalrhman.rizk@gmail.com'>
          abedalrhman.rizk@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form className='mt-10 flex flex-col justify-start dark:text-black'>
        <input
          name='email'
          type='email'
          placeholder='Your email'
          className='h-14 rounded-lg px-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          placeholder='Your message'
          className='h-48 my-3 p-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          required
          maxLength={500}
        ></textarea>
        <button
          type='submit'
          className='group flex items-center justify-center self-end gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105  active:scale-100 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
