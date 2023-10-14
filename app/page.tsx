import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4 '>
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
      <ThemeSwitch />
    </main>
  );
}
