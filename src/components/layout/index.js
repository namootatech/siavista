import Head from 'next/head';
import NavigationBar from '@/components/navigation';
import Footer from '@/components/footer';
import ThemeSwitcher from '@/components/theme-switcher';
import { useState } from 'react';
import { set } from 'ramda';
import { AnimatePresence, motion } from 'framer-motion';
import { blurGrayscale, blurMove, opacity } from './anim';

const Layout = ({ children, seo, backgroundColor = 'black' }) => {
  const animateWith = (variants, custom = null) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      custom,
      variants,
    };
  };

  const [themeHasChanged, setThemeHasChanged] = useState(false);
  const [theme, setTheme] = useState(null);

  const onThemeChange = async (theme) => {
    setThemeHasChanged(true);
    setTheme(theme);
  };

  const pageVariants = {
    initial: { scale: 0.5 },
    in: { scale: 1 },
    out: { scale: 0 },
  };

  const PageComponents = (
    <>
      <NavigationBar />
      <AnimatePresence mode='wait'>
        {/* Creates  spring like animation to load main page div*/}
        <motion.div
          exit={{ opacity: 0 }}
          initial='initial'
          animate='in'
          variants={pageVariants}
        >
          <main className='layout-content'>{children}</main>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );

  console.log('themeHasChanged', themeHasChanged);
  return (
    <div
      className={`super-container ${
        themeHasChanged ? 'theme-has-changed' : ''
      }`}
    >
      <Head>
        <title>
          Siavista Electrical - Quality Products & Services{' '}
          {seo?.title ? `| ${seo?.title}` : ''}
        </title>
        <meta
          name='description'
          content={
            seo?.description
              ? seo?.description
              : 'Siavista Electrical is committed to providing high-quality electrical products and services exceeding customer expectations. Explore our services in electrical contracting, access control, home automation, and more.'
          }
        />
        <meta
          name='keywords'
          content='Siavista Electrical, distributor, electrical services, access control, home automation, quality products, rapid delivery, Michael Ilunga, mechanical engineering, three phase qualified electrician, ET operators, Centurion products, electrical fence systems, generators, solar systems, battery backup systems, projects management, solar panels'
        />

        <meta
          property='og:site_name'
          content='Siavista Electrical - Quality Products & Services '
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='og:image' content='/logo.png' />
        <meta name='og:image:secure_url' content='/logo.png' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta
          name='og:title'
          content={`Siavista Electrical - Quality Products & Services  ${
            seo?.title ? `| ${seo?.title}` : ''
          }`}
        />
        <meta
          name='og:description'
          content={
            seo?.description
              ? seo?.description
              : 'Siavista Electrical is committed to providing high-quality electrical products and services exceeding customer expectations. Explore our services in electrical contracting, access control, home automation, and more.'
          }
        />
        <meta name='robots' content='follow' />
        <meta charSet='UTF-8' />
        <meta httpEquiv='content-language' content='en' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_SITE_URL} />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css'
          rel='stylesheet'
        ></link>
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/apple-touch-icon.png' sizes='any' />
        <link rel='icon' href='/favicon-32x32.png' sizes='any' />
        <link rel='icon' href='/favicon-16x16.png' sizes='any' />
        <link rel='icon' href='/android-chrome-512x512.png' sizes='any' />
        <link rel='icon' href={`/android-chrome-192x192.png`} sizes='any' />
      </Head>
      <div className='position-fixed bottom-0 end-0 switcher-container'>
        <ThemeSwitcher onThemeChange={onThemeChange} />
      </div>

      <div className='page stairs'>
        {/* Animate the current page blur and grayscale whenever the theme is changed */}
        {/* Waits for changes in the theme state */}
        <div className='transition-container'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={theme}
              {...animateWith(opacity)}
              className='transition-background'
            />
          </AnimatePresence>
        </div>
        <div className='transition-container'>
          {/* Animates the transition of the page  by applying a moving blure grayscale on top of the page */}
          <motion.div {...animateWith(blurMove, 1)} />
        </div>

        {PageComponents}
      </div>
    </div>
  );
};

export default Layout;
