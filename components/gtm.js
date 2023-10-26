import React, { useEffect } from 'react';
import Script from 'next/script';

const gtm = () => {
  return (
    <>
     <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-411006583"></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'AW-411006583');`}
      </Script>
    </>
  );
};

export default gtm;
