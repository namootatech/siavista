import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Poppins } from 'next/font/google';
import NextNProgress from 'nextjs-progressbar';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import * as gtag from '@/lib/gtag';
import { useRouter } from 'next/router';
// If you are looking for the css theme files, they live in the public folder
// to add your own css simply extend the main.css file in the styles folder

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--poppins-font',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    hotjar.initialize(4997210, 6);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className='main'>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
        }}
      ></script>
      <div id='main-container' className={`${poppins.variable}`}>
        <NextNProgress color='#f9921d' />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
