import React from 'react'
import Head from 'next/head'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import Banner from '../../components/Banner'
import Aspiring from '../../components/Aspiring'
import Faqslist from '../../components/Faqslist'

const Faqs = () => {

  const faqsHead = <h1 className='font50 fw700 color-blue'>Create An Impact With Our Non Fiction bookwriting Services</h1>

  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: faqsHead,
      pra: 'At highly affordable pricing, we bring our team of competent non fiction bookwriters with their promising expertise',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      faqs: 'faqs',
    }
  ]


  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/faq/",
    "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "sameAs": [
      "https://www.bookwritingexperts.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ]

   }
  const schema1 = { 
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "bookwritingexperts",
    "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "@id": "",
    "url": "https://www.bookwritingexperts.com/faq/",
    "telephone": "2132893888",
    "priceRange": "$99",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "445 S Figueroa St",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90071",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0536155,
      "longitude": -118.2568651
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.bookwritingexperts.com/",
      "https://www.facebook.com/bookwritingexperts",
      "https://twitter.com/bookwritingexp",
      "https://www.instagram.com/bookwritingexpert/",
      "https://www.linkedin.com/company/book-writing-exp/",
      "https://www.pinterest.com/bookwritingexperts/"
    ] 
  }

  return (
    <>

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <title>Frequently Asked Questions - Book Writing Experts</title>
        <meta name="description"
          content="Frequently Asked Questions that help you get the answers of some of the most common queries. Connect with us to get rid of writing hassle." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Frequently Asked Questions - Book Writing Experts" />
        <meta property="og:description"
          content="Frequently Asked Questions that help you get the answers of some of the most common queries. Connect with us to get rid of writing hassle." />
        <meta property="og:url" content="/faqs" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2022-08-31T23:04:08+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
        <link rel="icon" href="/favicon.svg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
        />

      </Head>


      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.faqs}
        />
      )}






      {/* Faqslist */}
      <Faqslist />




      {/* Aspiring */}
      <div className='datacloudco'>
        <Aspiring
          title='Allow us to dominate all the bookshelves and digital libraries, entrust our professional book writers with your book today!'
          text="Pick up the phone or email us, and book our book consultancy services today! The only thing standing in your way of being a best-selling author is not signing up for our professional book writing services! Allow us to assist you in getting there and getting the best and the most affordable book writers for hire today!"
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />



      </div>


    </>
  )
}

export default Faqs