'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';

import { useSectionInActive } from '@/hooks/hooks';

function Projects() {
  const { ref } = useSectionInActive('Projects', 0.5);
  return (
    <section ref={ref} id='projects' className='scroll-m-28'>
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
