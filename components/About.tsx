'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInActive } from '@/hooks/hooks';
function About() {
  const { ref } = useSectionInActive('About');
  return (
    <motion.section
      ref={ref}
      id='about'
      className='max-w-[50rem] leading-7 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className='mb-3 text-xl'>
        I&apos;m an enthusiastic Full Stack Developer with a robust
        foundation in both front-end and back-end web development. My
        odyssey in the realm of technology commenced with a profound
        fascination for crafting interactive and user-centric digital
        experiences.
      </p>
    </motion.section>
  );
}

export default About;
