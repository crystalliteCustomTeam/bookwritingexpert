import React from 'react'
import Banner from '../../components/Banner'
import Head from 'next/head'
import Script from 'next/script'

const Thankyou = () => {

  const thankuHead = <h1 className='font50 fw700 color-blue'>Thank You</h1>


  const bannertext = [
    {
      title: thankuHead,
      pra: 'For filling out the contact form. Our representative will contact you shortly.',
      banners: 'bookpublishingservices',
      thankyou: 'thankyou',



    }
  ]


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>thankyou - Book Writing</title>
      
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="thankyou - Book Writing" />
        <meta property="og:url" content="https://www.bookwritingexperts.com/thankyou/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:08:32+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Script>
        {`gtag('event', 'conversion', {'send_to': 'AW-411006583/T2rUCNThjIoDEPfs_cMB'});`}
      </Script>

      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          bannershome={item.banners}
          thankyou={item.thankyou}
        />
      )}

    </>
  )
}

export default Thankyou