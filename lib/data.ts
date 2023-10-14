import WordleImage from '@/public/wordle.jpeg';
import usePopcornImage from '@/public/usePopcorn.png';
import blogImage from '@/public/blog.jpeg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Interactive MDX-based blog',
    repo: '',
    demo: '',
    description:
      'In this project, I built an interactive MDX-based blog using Next 13',
    tags: ['Next.js', 'React', 'Tailwind', 'MDX', 'Framer Motion'],
    imageUrl: blogImage,
  },
  {
    title: 'Wordle Game',
    repo: 'https://github.com/abedalrhmanrizk/Word-Game',
    demo: 'https://word-game-ruddy.vercel.app/',
    description:
      'In this project, I recreated a popular online word game, Wordle',
    tags: ['React', 'HTML', 'CSS'],
    imageUrl: WordleImage,
  },
  {
    title: 'usePopcorn',
    repo: 'https://github.com/abedalrhmanrizk/usePopcorn',
    demo: 'https://use-popcorn-pi.vercel.app/',
    description:
      "usePopcorn is a React-based web application that allows you to search for movies, view their details, rate them, and keep track of the movies you've watched.",
    tags: ['React', 'API', 'React Hooks'],
    imageUrl: usePopcornImage,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Github',
  'Tailwind',
  'Bootstrap',
  'MongoDB',
  'Express',
  'Python',
  'Framer Motion',
] as const;
