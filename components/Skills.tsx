'use client';

import React from 'react';

import SectionHeading from './SectionHeading';
import { useSectionInActive } from '@/hooks/hooks';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,
    },
  }),
};
function Skills() {
  const { ref } = useSectionInActive('Skills');
  return (
    <section
      id='skills'
      ref={ref}
      className='max-w-[50rem] scroll-mt-28 '
    >
      <SectionHeading>Skills</SectionHeading>

      <ul className='flex flex-wrap justify-start gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, i) => (
          <motion.li
            key={i}
            className='border border-black/[0.1] rounded-xl bg-white py-2 px-4 dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimation}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
