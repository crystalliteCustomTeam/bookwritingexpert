import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/bookformating/icon-1.png'
import mission2 from '/public/images/bookformating/icon-2.png'
import mission3 from '/public/images/bookformating/icon-3.png'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
import newimagetwoo from '/public/images/booktrailerservcies/newimagetwoo.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Stillonthefence from '../../components/Stillonthefence'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Major from '../../components/Major'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const EbookWritingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'> <Link className='color-white textdocationnone hover' href='/ebook-writing-services'>Book Formatting Services</Link> That Help You Proudly Put Your Name On Your Book! </h1>;

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'We offer book formatting services that help make your book look professional and appealing to readers. We understand the importance of a well-formatted book, and our team of experts will work closely with you to ensure that your book meets all the necessary requirements. To help your masterpiece be error-free, our formatting services fit the bill! Hone your writing skills with us. Rest assured, we are the ones you need to make your book the best it can be!',
      discuss: discuss,
      homebannernum: '(213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'articlewritingservices',




    }
  ]


  const geta = <span className='fw700 color-black'>With Us, Get Ready To Finally See Your Hard Work In Print!</span>

  const titleDb = <span className=' color-blue'>Do You Want To Captivate Your Readers From Beginning To End?
  </span>
  const posdata = <span className='fw700' >Give Your Book The Professional Look It Deserves With Our <Link className='color-white textdocationnone hover' href='/book-formatting-services'>Formatting Services!</Link> </span>


  const WaitingForSomeone = <span>Waiting For Someone To <Link className='color-black textdocationnone hover' href='/ebook-writing-services' > Give Your Book An EBook Version?</Link></span>

  const fine = [

    {
      img: mission1,
      title: 'Identifying and Rectifying the Flaws',
      text: 'Our formatting professionals receive the manuscript from the clients to start spotting the flaws. With every possible error spotted, we jump-start fixing the imperfections to make the book impeccably flawless.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Bringing Right Expertise and Tools to the Table',
      text: 'To format your book for success, our formatting pros go over the manuscript with a fine-tooth comb. They know how to best use the formatting tools to rectify the issues and make the book bright-eyed and bushy-tailed.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Customized Formatting Services',
      text: 'Our best book formatting services are designed by keeping the genre of your book and the unique requirements in mind. We ensure to leave no stone unturned when it comes to delivering the formatting services for your masterpiece!',
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>  Are You On The Lookout For <br></br> <Link href='/book-formatting-services' className='color-blue textdocationnone hover fw700'>Professional Formatting Services?</Link> </span>


  const datesettext = <span>  Book Writing Experts is the perfect destination to stop by. You can confide in us for formatting your book up to the universal standards. Have us on your side and define the success of your book with our professional book formatting services!

  </span>

  const reasons = [

    {
      title: 'A Top-Notch Group Of Writers',
      text: 'Work with some of the industry`s top editors, authors, and publishing strategists. Our team-based strategy will give you the best chance of success.',
      classnum: 'number1',

    },
    {
      title: 'Individualized Approach to Strategy',
      text: 'In order to ensure that we develop a strategy that will help you achieve your goals, we first hold four extensive publishing strategy meetings.',
      classnum: 'number1',

    },
    {
      title: 'Fine-Tuned Process',
      text: 'Enjoy the dependability and effectiveness of our professionally managed book-writing process.',
      classnum: 'number1',

    },

    {
      title: 'Specialists in Books Composing',
      text: 'Authors from practically every genre who have received accolades are on our team, along with #1 New York Times Book Writers.',
      classnum: 'number1',

    },
    {
      title: 'The Best of the Best Editors',
      text: 'Your proposal will be supervised and edited by a former acquisitions editor from a Big-5 publisher with a number of New York Times’ book writing titles to their credit.',
      classnum: 'number1',

    },
    {
      title: 'Publishing Process',
      text: 'Publishing Process We will walk you through the entire book publication process. We can either place your book directly with traditional publishers or assist you in choosing the best hybrid publishing solution.',
      classnum: 'number1',

    },


  ]

  const text = <span>Get in touch with our professional book writing specialists today. Our eBooks Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!
  </span>;


  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/formatting-services/"
    },
    "headline": "Formatting Services To Help You Pen Down Your Thoughts Effortlessly!",
    "description": "Formatting Services",
    "image": "",
    "author": {
      "@type": "Organization",
      "name": "Mini Investments"
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": "2022-03-21"
  }
  const schema1 = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://bookwritingexperts.com/book-formatting-services/",
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
  const schema2 = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "bookwritingexperts",
    "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "@id": "",
    "url": "https://bookwritingexperts.com/book-formatting-services/",
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
  const schema3 = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "bookwritingexperts",
    "url": "https://bookwritingexperts.com/book-formatting-services/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bookwritingexperts.com/formatting-services/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Book Formatting Services - Book Writing Experts</title>
        <meta name="description" content="Book Formatting Services that meet the global formatting standards. Call the experts to get it done at affordable price range." />
        <link rel="canonical" href="/book-writing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Book Formatting Services - Book Writing Experts" />
        <meta property="og:description" content="Book Formatting Services that meet the global formatting standards. Call the experts to get it done at affordable price range." />
        <meta property="og:url" content="/book-writing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="6 minutes" />
        <link rel="icon" href="/favicon.svg" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
        />

      </Head>




      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          subtext1={item.subtext1}
          subtext2={item.subtext2}
          subtext3={item.subtext3}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          homebanlogos={item.banlogo}
          bannershome={item.banners}
          processs={item.process}
        />
      )}








      {/* Dowecome */}
      <Dowecome
        title={geta}
        text='Document formatting services can save you a lot of time and hassle when it comes to getting your book ready for publication. A professional formatter will ensure that your book meets all the necessary requirements in terms of layout, design, and typography, as well as making sure it complies with any international standards. If you want to get rid of this tedious process, give our professionals a call and let your book outshine!'
        Dowecome="publishmybook"

      />


      {/* Major */}
      <Major />


      {/* Stopworrying */}
      <Stopworrying
        title={titleDb}
        title2={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <h2 className="color-lightgray font25 t-center font-f mb-2">Our Approach</h2>

            <p className='font30 font-f fw500 colortextgrey t-center pb-2'>We Take Your Raw Manuscript And Turn It Into A Finished, Print-Ready Book.
            </p>

          </Row>

          <Row className='gy-5'>
            {fine.map((item, i) =>
              <Finetoothedbook key={i}
                title={item.title}
                text={item.text}
                classtop={item.class}
                img1={item.img}
                btn={item.btn}
              />
            )}
          </Row>
        </Container>
      </div>




      {/* Whybookpublishing */}
      {/* <div className={styles.whybookpublishing}>
        <Container>

          <Row>
            <h2 className='font50 fw700 color-blue t-center'>Why Does One Need Professional Book Writing Services?</h2>
            <p className='font15  textcolor t-center pb-5 mt-3'>
              Our book writing team is composed of the industry's elite who know the ins and outs of the writing industry better than any of us. If you have any more questions about signing up for the professional book writing services, we may have your answers listed below!
            </p>

          </Row>

          <Row>
            {whybookpublishingdata.map((item, i) =>
              <Whybookpublishing key={i}
                title={item.title}
                text={item.text}
                col6={item.col6}
              />
            )}
          </Row>
        </Container>
      </div> */}




      {/* Selfpublishing */}

      <div>
        <Selfpublishing
          title={WaitingForSomeone}
          text={text}
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
          image={newimagetwoo}
          whychooseclass="marketyourbook"
        />
      </div>





      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



      {/* Lululogos components */}
      <Lululogos />




      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Professional Book Formatting Services We Give New Life To Your Words'
          text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
          number="(213) 289 3888"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default EbookWritingservices