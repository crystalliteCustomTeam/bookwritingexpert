import '@/styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const ZENDESK_KEY = "d1d4aa8a-5573-473a-b921-5b6a8eb467ad";
import Zendesk, { ZendeskAPI } from "../pages/ZendexConfig";
import Script from 'next/script';
import Pixel from '../../components/Pixel';
import Head from 'next/head';


export default function App({ Component, pageProps }) {

  const handleLoaded = () => {
    zE('webWidget:on', 'open', function () {
    });
  };


  return (
    <>


      <Head>
      <meta name="google-site-verification" content="LeCTlf6XFkdNEsNBD622lw9OyimFlgL8Vbkq6ZiYYxM" />
      
      </Head>


      <Header />

      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=AW-411006583"></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'AW-411006583');`}
      </Script>

      {/* Other meta tags and head elements */}



      <Pixel />
      <Component {...pageProps} />
      <Footer />

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>


    </>
  )
}
