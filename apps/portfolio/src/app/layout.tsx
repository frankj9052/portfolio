import { AnimatePresence } from 'framer-motion';
import { TopNav } from '../components/navbar/TopNav';
import './global.css';
import { LandingAnimationPage } from '../components/LandingAnimationPage';

export const metadata = {
  title: 'Welcome to portfolio',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className='font-popins portfolio-theme text-color-text-black'>
          <TopNav />
          <LandingAnimationPage/>
          {children}
      </body>
    </html>
  );
}
