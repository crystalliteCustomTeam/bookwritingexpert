import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const ZENDESK_KEY = "d1d4aa8a-5573-473a-b921-5b6a8eb467ad";
import Zendesk, {ZendeskAPI} from "../pages/ZendexConfig";
import Script from "next/script";
import Pixel from "../../components/Pixel";
import Head from "next/head";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Loader from "../../components/Loader";
import Metas from "../../components/Metas";
import Headerlp from "../../components/Headerlp";
import Footerlp from "../../components/Footerlp";
import NewbooklpFooter from "../../components/bookmarketinglp/Footer/Footer";
import { GoogleTagManager,GoogleAnalytics } from '@next/third-parties/google'

export default function App({Component, pageProps}) {
  const router = useRouter();
  const handleLoaded = () => {
    zE("webWidget:on", "open", function () {});
  };

  const sluginer = router.asPath;

  const weblink = "https://www.bookwritingexperts.com";

  const newlop = router.asPath == "/bookexperlp";
  const newbooklp = router.asPath == "/book-marketinglp";
  const newcol = weblink + sluginer;

  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 3000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="LeCTlf6XFkdNEsNBD622lw9OyimFlgL8Vbkq6ZiYYxM" />
        <link rel="canonical" href={newcol} />
      </Head>
      <Metas />

      {/* <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-HE06TX00YE"
      ></Script>
      <Script strategy="lazyOnload">
        {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HE06TX00YE');
        `}
      </Script> */}
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=AW-411006583"></Script>


{/*       
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-411006583"
      ></Script>
      <Script strategy="lazyOnload">
        {`  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-411006583');
        `}
      </Script>
           */}

      {/* Other meta tags and head elements */}

<GoogleAnalytics gaId="AW-411006583" />



      {/* Other meta tags and head elements
      <Script strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K994MT85');
        `}
      </Script>

      </Script> */}

      
      <GoogleTagManager gtmId="GTM-K994MT85" />

      {newlop || newbooklp ? <Headerlp /> : <Header />}
      <Pixel />
      <Component {...pageProps} />
      {newlop ? <Footerlp /> : (newbooklp ? <NewbooklpFooter /> : <Footer />)}
      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>
    </>
  );
}
