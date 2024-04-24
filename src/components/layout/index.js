
import Head from 'next/head';
import NavigationBar from '@/components/navigation';
import Footer from '@/components/footer'
const Layout = ({ children }) => {

  return (
    <div>
      <Head>
        <title>Siavista Electrical</title>
        <meta
          name='description'
          content="Siavista Electrical trive to be the most trusted, respected, and preferred brand for electrical solutions"
        />
        <meta
          name='keywords'
          content="Electricl services, Music , music, artists, producers, collaborate, create music, music production, music collaboration, music creation, music platform, music community, music industry, music artists, music producers, music creators, music lovers, music enthusiasts, music fans, music listeners, music makers, music shakers, music movers, music groovers, music shapers, music creators, music innovators, music pioneers, music trailblazers"
        />
        <meta property="og:site_name" content="Siavista Electrical" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='og:image' content='/.logo.png' />
        <meta name="og:image:secure_url"  content='/logo.png' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://siavista.netlify.app" />
        <meta name='og:title' content='Siavista Electrical' />
        <meta name='og:description' content="" />
        <meta name='robots' content='follow' />
        <meta charset="UTF-8"/>
        <meta http-equiv="content-language" content="en"/>
        <meta property='og:url' content="https://siavista.netlify.app"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" rel="stylesheet"></link>
        {/* <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href="/apple-touch-icon.png" sizes='any' />
        <link rel='icon' href="/favicon-32x32.png" sizes='any' />
        <link rel='icon' href="/favicon-16x16.png" sizes='any' />
        <link
          rel='icon'
          href="/android-chrome-512x512.png"
          sizes='any'
        />
        <link
          rel='icon'
          href={`/android-chrome-192x192.png`}
          sizes='any'
        /> */}
      </Head>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;