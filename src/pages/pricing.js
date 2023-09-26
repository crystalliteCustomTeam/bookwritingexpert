import React from 'react'
import Head from 'next/head'
import Banner from '../../components/Banner'
import Experts from '../../components/Experts'
import Dowecome from '../../components/Dowecome'
import howdoimg from '/public/images/professional/professional.png'
import BookPublishing from '../../components/Bookpublishing'
import BookPromotion from '../../components/Bookpromotion'
import BookWriting from '../../components/Bookwriting'
import BookEditing from '../../components/Bookediting'
import BookMarketing from '../../components/Bookmarketing'
import BookProofRead from '../../components/Bookproofread'
import BookGhostWriting from '../../components/Bookghostwriting'
import BookChildrenPublish from '../../components/Bookchildrenpublish'
import BookChildrenIllus from '../../components/Bookchildrenillus'
import BookDigitalMarket from '../../components/Bookdigitalmarket'
import homebannerlogos from '/public/images/bannerimages/logos.png'

const Pricing = () => {

  const priceHead = <h1 className='font50 fw700 color-blue'>The World Awaits Your Masterpiece!</h1>

  const exprtSpan = <span className='fw500 font50 color-white font-f t-center font-f mb-4'><span className='color-blue fw700'>Book Writing Experts</span> Is waiting for you to Ask for a <span className='color-blue fw700'>Professional Ghostwriter</span></span>;

  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: priceHead,
      pra: 'Do you wish to see your published work ranked among the best sellers? Want to earn the stellar reputation of a published author? Dream of having a well-written book to your name?',
      discuss: discuss,
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'pricing',
      classpost: 'classpost',
    }
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://bookwritingexperts.com/pricing/",
    "logo": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "sameAs": [
      "https://bookwritingexperts.com/",
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
    "url": "https://bookwritingexperts.com/pricing/",
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
      "https://bookwritingexperts.com/",
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
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <title>Pricing - Book Writing Experts</title>
        <meta name="description"
          content="Ghostwriting packages that are affordable and designed keeping in mind your budget constraints. Give us a call and let the magic of words happen." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Pricing - Book Writing Experts" />
        <meta property="og:description"
          content="Ghostwriting packages that are affordable and designed keeping in mind your budget constraints. Give us a call and let the magic of words happen." />
        <meta property="og:url" content="/pricing" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2022-08-31T23:03:08+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="4 minutes" />
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
          subtext={item.subtext}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
        />
      )}

      {/* Bookbadges */}
      <BookPublishing />

      <BookPromotion />

      <BookWriting />

      <BookEditing />

      <BookMarketing />

      <BookProofRead />

      <BookGhostWriting />

      <BookChildrenPublish />

      <BookChildrenIllus />
      <div className='datacloud'>
        <BookDigitalMarket />
      </div>
      {/* Talk To Our Experts! */}
      <Experts
        title={exprtSpan}
        text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
      />

      {/* Dowecome */}
      <Dowecome
        title='Struggling To Sell More Books?'
        text="Why Not Hire Expert Book Marketing Professionals To Promote Your Book!"
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={howdoimg}
        Dowecome="Dowecome"
      />

    </>

  )
}

export default Pricing