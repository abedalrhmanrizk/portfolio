'use client';

import React from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveContext =
  React.createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] =
    React.useState<SectionName>('Home');

  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}

export default ActiveSectionContext;

export function useActiveSectionContext() {
  const context = React.useContext(ActiveContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
}
