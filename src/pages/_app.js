import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Poppins } from 'next/font/google';
import NextNProgress from 'nextjs-progressbar';

// If you are looking for the css theme files, they live in the public folder
// to add your own css simply extend the main.css file in the styles folder

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--poppins-font',
});

export default function App({ Component, pageProps }) {
  return (
    <div className='main'>
      <div id='main-container' className={`${poppins.variable}`}>
        <NextNProgress color='#f9921d' />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
