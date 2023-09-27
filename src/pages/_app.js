import '@/styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const ZENDESK_KEY = "d1d4aa8a-5573-473a-b921-5b6a8eb467ad";
import Zendesk, { ZendeskAPI } from "../pages/ZendexConfig";
import Script from 'next/script';

export default function App({ Component, pageProps }) {

  const handleLoaded = () => {
    // ZendeskAPI("messenger", "open");
    zE('webWidget:on', 'open', function () {
    });
  };

  // function openZendeskChat(e) {
  //   e.preventDefault();
  //   if (typeof zE !== 'undefined') {
  //     zE('webWidget', 'open')
  //   }
  // }

  return (
    <>
      <Header />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-411006583"></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'AW-411006583');`}
      </Script>


      <Component {...pageProps} />
      <Footer />

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
        {/* <div href="#" onClick={openZendeskChat}>Open Zendesk Chat</div> */}
      </div>


    </>
  )
}
