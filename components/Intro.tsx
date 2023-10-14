'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import image from '/public/avatar.jpg';
import { useSectionInActive } from '@/hooks/hooks';

function Intro() {
  const { ref } = useSectionInActive('Home');

  return (
    <section
      ref={ref}
      id='home'
      className='max-w-[50rem] scroll-mt-28'
    >
      <div
        className='bg-sky-500 absolute top-[-1rem] left-[-35rem] -z-10
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-sky-700'
      ></div>
      <div className='bg-sky-200 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-sky-800'></div>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={image}
              alt='Abedalrhman portrait'
              quality={95}
              priority={true}
              className='h-48 w-48 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>

          <motion.span
            className='text-4xl absolute right-3 bottom-3'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              duration: 0.2,
              stiffness: 125,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-left'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>
          Hello, I&apos;m Abedalrhman.
        </span>{' '}
        I&apos;m a{' '}
        <span className='font-bold'>Full-stack developer</span> I
        enjoy building <span className='italic'>sites & apps</span>.
        <br /> CSS is My Superpower ! My focus now on{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className='flex items-center justify-center sm:justify-start flex-col sm:flex-row  gap-2 sm:gap-4 px-4 text-lg font-medium flex-wrap'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 justify-center w-[14.5rem] rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition'
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          href='/CV.pdf'
          className='group bg-white px-7 py-3 flex items-center justify-center gap-2 w-[14.5rem] rounded-full outline-none focus:scale-105 hover:scale-105  active:scale-100 transition
          borderBlack dark:bg-white/10 '
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <div className='flex items-center justify-center gap-5'>
          <a
            href='https://www.linkedin.com/in/abedalrhmanrizk'
            target='_blanc'
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950  active:scale-105 transition
          border border-black/10  dark:bg-white/10 dark:text-white/60'
          >
            <BsLinkedin />
          </a>

          <a
            href='https://twitter.com/abedalrhmanrizk'
            target='_blanc'
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950  active:scale-105 transition
          border border-black/10 dark:bg-white/10 dark:text-white/60'
          >
            <FaXTwitter />
          </a>

          <a
            href='https://github.com/abedalrhmanrizk'
            target='_blanc'
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition
          border border-black/10  dark:bg-white/10 dark:text-white/60'
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
