import React from 'react';
import { useActiveSectionContext } from '@/app/context/ActiveSectionContext';
import { useInView } from 'react-intersection-observer';
import { SectionName } from '@/lib/types';

export function useSectionInActive(
  sectionName: SectionName,
  threshold = 0.75
) {
  const { setActiveSection, timeOfLastClick } =
    useActiveSectionContext();

  const { ref, inView } = useInView({ threshold });

  React.useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
