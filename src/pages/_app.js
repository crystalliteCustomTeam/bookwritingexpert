import "@/styles/globals.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// const ZENDESK_KEY = "d1d4aa8a-5573-473a-b921-5b6a8eb467ad";
// import Zendesk, { ZendeskAPI } from "../pages/ZendexConfig";
import Script from "next/script"
import Pixel from "../../components/Pixel"
import Head from "next/head"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Loader from "../../components/Loader"
import Metas from "../../components/Metas"
import Headerlp from "../../components/Headerlp"
import Footerlp from "../../components/Footerlp"
import NewbooklpFooter from "../../components/bookmarketinglp/Footer/Footer"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import localFont from "next/font/local"
import { Poppins as FontSecondary } from "next/font/google"

const fontSecondary = FontSecondary({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  display: "swap",
  fallback: ["system-ui", "arial"],
})

const primaryFont = localFont({
  src: "../font/SFProDisplay-Regular.ttf",
  variable: "--font-primary",
  display: "swap",
  fallback: ["system-ui", "arial"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const sluginer = router.asPath
  const weblink = "https://www.bookwritingexperts.com"
  const newlop = router.asPath == "/bookexperlp"
  const newbooklp = router.asPath == "/book-marketinglp"
  const newcol = weblink + sluginer

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="LeCTlf6XFkdNEsNBD622lw9OyimFlgL8Vbkq6ZiYYxM"
        />
        <link rel="canonical" href={newcol} />
      </Head>
      <Metas />
      <div className={`${primaryFont.variable} ${fontSecondary.variable}`}>
        {newlop || newbooklp ? <Headerlp /> : <Header />}
        <Component {...pageProps} />
        {newlop ? <Footerlp /> : newbooklp ? <NewbooklpFooter /> : <Footer />}
      </div>
      <Script id="tawkto-snippet">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/678eb3553a8427326071da6b/1ii2mp2bs';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
        `}
      </Script>
      <Script strategy="lazyOnload" id="facebook-snippet">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '8267519626599421');
            fbq('track', 'PageView');
        `}
      </Script>
      <GoogleAnalytics strategy="lazyOnload" gaId="AW-411006583" />
      <GoogleTagManager strategy="lazyOnload" gtmId="GTM-K994MT85" />
      {/* <Script
        strategy="lazyOnload"
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=d1d4aa8a-5573-473a-b921-5b6a8eb467ad"
      /> */}
    </>
  )
}
