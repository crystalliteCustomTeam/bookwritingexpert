import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/ebookwritingservices/fssf.png'
import mission2 from '/public/images/ebookwritingservices/bgdf.png'
import mission3 from '/public/images/ebookwritingservices/dfdgf.png'
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

  const bannertext = [
    {
      title: (
        <>
          <h1 className='font50 fw300 text-white font-f hero-span'>Strengthening Ideas and Enriching The Concepts With Our Proficient <Link className='textdocationnone fw700 color-blue hover' href="/ebook-writing-services/">Ebook Writing Services</Link>!</h1>
        </>
      ),
      pra: (
        <> Let us be the voice of your creativity and bring your novels to life with our expert <Link className='textdocationnone text-white hover' href="/ebook-writing-services/">ebook writers</Link>. We breathe life into your ideas, crafting exceptional narratives. </>
      ),
      discuss: "Hire Professional Ebook Writing Services!",
      homebannernum: 'Call Us at (855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'ebook',

    }
  ]


  const WaitingForSomeone = <span>Waiting For Someone To <Link className='color-black textdocationnone hover' href='/ebook-writing-services/'> Give Your Book An EBook Version?</Link></span>

  const fine = [

    {
      img: mission1,
      title: 'Delivery Commitments',
      text: (<> At <strong>Book Writing Experts</strong>, we prioritize our clients above all else! Our <Link className='color-lightgray textdocationnone hover' href='/ebook-writing-services/'>ebook writers</Link> guarantee timely delivery of your e-books, ensuring you receive them right on schedule. </>),
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Unparalleled Originality',
      text: (<> Our team of expert <Link className='color-lightgray textdocationnone hover' href='/ebook-writing-services/'>ebook writers</Link> are committed to crafting original and tailor-made content exclusively for you when you choose our ebook writing services. </>),
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Thoroughly Researched Customization:',
      text: (<> At <strong>Book Writing Experts</strong>, our team of professional <Link className='color-lightgray textdocationnone hover' href='/ebook-writing-services/'>ebook writers</Link> conducts comprehensive research on the subject matter, ensuring the delivery of personalized content tailored to your specific requirements. </>),
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>  Waiting For Someone To <br></br> <Link href='javascript:$zopim.livechat.window.show();' className='color-blue textdocationnone hover fw700'>Give Your Book An Book Version?</Link> </span>


  const datesettext = <span>  Get in touch with our <Link href='javascript:$zopim.livechat.window.show();' className='color-blue textdocationnone hover'>professional book writing</Link> specialists today. Our Books Writing Experts choose the most compelling words and perfect linguistics for your work. We promise original, customized, and timely delivery of your content without breaking your bank!</span>

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
      "@id": "https://www.bookwritingexperts.com/ebook-writing-services/"
    },
    "headline": "Ebook Writing Services That Give Meaning To Your Imagination!",
    "description": "Ebook Writing Services",
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
    "url": "https://www.bookwritingexperts.com/ebook-writing-services/",
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
  const schema2 = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "bookwritingexperts",
    "image": "https://cdn-cpmon.nitrocdn.com/sKNWrfOsKSxqdRuCiSOtyhAZTjxpwVrv/assets/static/optimized/rev-f0cb152/wp-content/uploads/2022/06/BWE-logo-2.png",
    "@id": "",
    "url": "https://www.bookwritingexperts.com/ebook-writing-services/",
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
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Ebook Writing Services - Book Writing Experts</title>
        <meta name="description" content="Ebook Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
      
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Ebook Writing Services - Book Writing Experts" />
        <meta property="og:description" content="Ebook Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
        <meta property="og:url" content="/ebook-writing-services" />
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
        Dowecome="publishmybook"
      />


      {/* Major */}
      <Major />


      {/* Stopworrying */}
      <Stopworrying
        title={<> <span className=' color-blue'>Exhausted from Attempting to Compose an Ebook By Yourself?</span> </>}
        title2={<> <span className='fw700'>What Obstacle Are You Facing That's Preventing You From Utilizing Our Affordable <Link className='text-white textdocationnone hover' href='/ebook-writing-services/'>Ebook Writers</Link>? </span> </>}
        btn1='Get Your Free Proposal!'
        btn2='Talk to an expert'
      />


      <div>
        <Selfpublishing
          title={WaitingForSomeone}
          text={text}
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
          image={newimagetwoo}
          whychooseclass="marketyourbook"
        />
      </div>

      <div className='pt-5 pb-5'>
        <Container>
          <Row className='pt-5 pb-5'>
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font30 font-f fw500 colortextgrey t-center pb-2'>Our Objective Is To Enhance The Quality Of Your Ebooks!</p>

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
          number="(855) 500 0057"
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
          title={<> Revitalize Your Words With Our Expert <Link className='color-blue textdocationnone hover' href='/ebook-writing-services/'>Ebook Writing Services</Link>! </>}
          text="Trust us to guide you through every step, ensuring your legacy thrives in the power of words."
          subtext="So, ask yourself, what is restricting you to reach your goals?"
          number="Call Now At (855) 500 0057"
        />
      </div>


    </>
  )
}

export default EbookWritingservices