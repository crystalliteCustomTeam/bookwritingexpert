import '@/styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const ZENDESK_KEY = "d1d4aa8a-5573-473a-b921-5b6a8eb467ad";
import Zendesk, { ZendeskAPI } from "../pages/ZendexConfig";
import Script from 'next/script';
import Pixel from '../../components/Pixel';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import logo from '../../public/images/logo.svg';
import loader from '../../public/images/loader.gif';
import Image from 'next/image';

export default function App({ Component, pageProps }) {


  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Set initial loading state based on router.isReady
    if (router.isReady) {
      setLoading(false);
    }

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);


  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };


  const routernew = router.pathname == '/';


  return (
    <>


      <Head>
        <meta name="google-site-verification" content="LeCTlf6XFkdNEsNBD622lw9OyimFlgL8Vbkq6ZiYYxM" />

      </Head>

      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=AW-411006583"></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'AW-411006583');`}
      </Script>
      {/* Other meta tags and head elements */}


      {loading && (
        <div className="loading-screen">
          {/* Customize your loader here */}
          <Image quality={100}  src={logo} alt="Book Writing Experts"></Image>
          {/* <Image quality={100}   src={loader} alt="Book Writing Experts"></Image> */}
          <div className="spinner mt-3 mb-3"></div>
          <p className='color-white'>Loading...</p>
        </div>
      )}









      {loading &&
        <>
          {routernew}

        </>
      }


      <Header />
      <Pixel />
      <Component {...pageProps} />
      <Footer />

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>

    </>
  )
}
