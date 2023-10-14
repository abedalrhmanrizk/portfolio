import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ActiveSectionContext from './context/ActiveSectionContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abedalrhman | Personal Portfolio',
  description: 'Abedalrhman Rizk is a Full-Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} body`}>
        <ActiveSectionContext>{children}</ActiveSectionContext>
      </body>
    </html>
  );
}
