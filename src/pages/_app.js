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
import Modal from 'react-bootstrap/Modal';
import Thanksgiving from '../../components/Thanksgiving';
import styles from '@/styles/Header.module.css'


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


  const thanks = router.pathname == '/thanks-giving'


  const [show1, setShow1] = useState('');

  function modal1() {
    setShow1(true);

  }
  function closemodal1() {
    setShow1(false);
  }



  const sluginer = useRouter().asPath;


  const weblink = "https://www.bookwritingexperts.com";






  const newcol = weblink + sluginer;


  return (
    <>


      <Head>
        <meta name="google-site-verification" content="LeCTlf6XFkdNEsNBD622lw9OyimFlgL8Vbkq6ZiYYxM" />
        <link rel="canonical" href={newcol} />
      </Head>

      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-HE06TX00YE"></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HE06TX00YE');
        `}
      </Script>
      {/* Other meta tags and head elements */}
      <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K994MT85');
        `}
      </Script>


      {loading && (
        <div className="loading-screen">
          {/* Customize your loader here */}
          <Image quality={100} src={logo} alt="Book Writing Experts"></Image>
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

      <div onLoad={modal1}>
        <Header />
      </div>
      <Pixel />
      <Component {...pageProps} />
      <Footer />



      {/* {thanks ? 
      
      <Modal show={show1} centered onHide={closemodal1} onLoad={modal1}  className='thanksgiving'>
          <Modal.Body>
            <Thanksgiving /> <span onClick={closemodal1} className={styles.cross}>x</span>
          </Modal.Body>
      </Modal>
     
:

''
} */}


      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>

    </>
  )
}
