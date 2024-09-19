import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const ZENDESK_KEY = "d1d4aa8a-5573-473a-b921-5b6a8eb467ad";
import Zendesk, { ZendeskAPI } from "../pages/ZendexConfig";
import Script from "next/script";
import Pixel from "../../components/Pixel";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";
import Metas from "../../components/Metas";
import Headerlp from "../../components/Headerlp";
import Footerlp from "../../components/Footerlp";
import NewbooklpFooter from "../../components/bookmarketinglp/Footer/Footer";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import localFont from "next/font/local"
import { Poppins as FontSecondary } from "next/font/google"


const fontSecondary = FontSecondary({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ['system-ui', 'arial']
})

const primaryFont = localFont({
  src: "../font/SFProDisplay-Regular.ttf",
  variable: "--font-primary",
  display: "swap",
  fallback: ["system-ui", "arial"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const handleLoaded = () => {
    zE("webWidget:on", "open", function () { });
  };
  const sluginer = router.asPath;
  const weblink = "https://www.bookwritingexperts.com";
  const newlop = router.asPath == "/bookexperlp";
  const newbooklp = router.asPath == "/book-marketinglp";
  const newcol = weblink + sluginer;

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="LeCTlf6XFkdNEsNBD622lw9OyimFlgL8Vbkq6ZiYYxM" />
        <link rel="canonical" href={newcol} />
      </Head>
      <Metas />
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-411006583"></Script>
      <GoogleAnalytics gaId="AW-411006583" />
      <GoogleTagManager gtmId="GTM-K994MT85" />
      <div className={`${primaryFont.variable} ${fontSecondary.variable}`}>
        {newlop || newbooklp ? <Headerlp /> : <Header />}
        <Pixel />
        <Component {...pageProps} />
        {newlop ? <Footerlp /> : (newbooklp ? <NewbooklpFooter /> : <Footer />)}
      </div>
      <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
    </>
  );
}
