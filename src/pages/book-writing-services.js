import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import publishmybook from '/public/images/selfpublishingservices/publishmybook.png'
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
import Cta from '../../components/Cta'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50  color-white font-f hero-span'> Leave Your Mark Forever: Our  <Link className='textdocationnone color-blue hover fw700' href="/book-writing-services">Book Marketing Services</Link>  <span className=''>Will Ensure Your Book To Leave a Lasting Impression!</span> </h1>;

  const discuss = <span>Market Your Book Now!</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'Is Your Book Ready to Be Read, But Struggling to Reach Its Target Audience?',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'ebook',




    }
  ]


  const geta = <span>Get Connected To Your Readers With <Link className='color-blue fw700 textdocationnone hover' href='/book-writing-services'> Book Writing Experts! <br></br> </Link></span>

  const posdata = <span>What Is Stopping You From Availing The Most <Link className='textdocationnone fw700 color-blue hover' href='/book-writing-services'>Affordable Books Writing Services? </Link> </span>



  const fine = [

    {
      img: mission1,
      title: 'Delivery Commitments',
      text: 'Our clients are our utmost priority! We promise to deliver your Books right on time.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Originality',
      text: 'We have a team of expert Books writers who dedicatedly write original and customized content every time you take our services.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Well - Researched Personalization',
      text: 'The professional Books writers at the Book Writing Experts conduct in-depth research on the topic and deliver personalized content as per your requirements.',
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

  const text = <span>We want to help you shine your Book and make it compelling for readers, so we'll work with the most important ideas. You have an option of doing a one-hour interview where any challenging or confusing topics will be bouncing off us before they're even published.</span>;


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
  const schema3 = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ebook writing services ebook writers",
    "description": "ebook writing services ebook writers ebook writing services ebook writers ebook writing services ebook writers",
    "provider": {
      "@type": "Organization",
      "name": "book editing services book editing company book editors",
      "url": "https://www.bookwritingexperts.com/ebook-writing-services/"
    },
    "serviceType": ["ebook writing services ebook writers"],
    "areaServed": {
      "@type": "country",
      "name": "us"
    }
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Book Writing Services - Book Writing Experts</title>
        <meta name="description" content="Book Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
        <link rel="canonical" href="/book-writing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Book Writing Services - Book Writing Experts" />
        <meta property="og:description" content="Book Writing Services at the most honest rates by the experts. Give us a call and let them define your book success." />
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
        text='Writing an Book is no walk in the park, and you do not have to go through this trouble. Book Writing Experts have a dedicated team of Book Writers for you, right at your disposal. Our specialists do not just transform your words into a story but also help your book rank among the top sellers. We take your ideas to the world and help you reach out to the right readers through the right platforms.'
        Dowecome="publishmybook"

      />


      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />


      {/* Makestories */}
      <div className='dataSetCo sliderImg'>
        <Makestoriesnew
          title='Our Book Editing Projects'
          para='Let Our Book Editing Team Help You.'
        />
      </div>


      {/* Stopworrying */}
      <Stopworrying
        title='Are You Seeking For a Swift Solution to Reach a Mass Readership?'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>We Aim To Add Value To Your <Link className='textdocationnone color-blue hover fw700' href='/book-writing-services'> Books!</Link></p>

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



      <Ourprocess
        title='The Ultimate Destination for Book Writing Services'
        text='Book Writing Experts offers a team of skilled writers and designers waiting to bring your concept to life. Our book writing service specializes in a variety of genres, including: research-based books, self-help, fiction, autobiographies, and children’s books.'

        heading1='Talk to a Book Writing Consultant'
        para1='Everything depends on communication because we need your input to move forward. A detailed discussion on the topic or story is the key to a successful book.'
        num1='01'

        heading2='The Writing Phase Begins'
        para2='Our skilled ghostwriters begin writing, keeping in mind your writing philosophy and ideas, in accordance with the framework.'
        num2='02'

        heading3='Q/A and Submission'
        para3='After completion of each chapter, the draft is sent to the QA for full screening. Once all mistakes are fixed, the draft is then shared to the client for review. If there’s a feedback of any sort, that gets incorporated and adjusted, before sharing it again with the client for final review.'
        num3='03'

        heading4='Cover Design'
        para4='Have you ever found yourself browsing on a book shelf? Do the most interesting covers catch your eye? They always do.  People always do judge the book by its cover. That’s the reason designing book covers is a tedious but the most important of all our jobs. The design team gets on board with the client to design a cover that best speaks for the book.'
        num4='04'

        heading5='Feedback and Provision of Other Services'
        para5='Our book writing comes to a stop at this point. Our team will further connect you to our publishing and marketing teams if you require more help with editing, publishing, and/or marketing.'
        num5='05'


      />



      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text={datesettext}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
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
          title='Planning >> Writing >> Designing = Book Customization Formula'
          text={text}
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
          image={publishmybook}
          whychooseclass="marketyourbook"
        />
      </div>



      {/* Lululogos components */}
      <Lululogos />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />



      {/* Stillonthefence component */}
      <div className={styles.stillbookwritingservices}>
        <Container >
          <Row >
            <h2 className='font50 fw700 color-white t-center font-f mb-5'>What Distinguishes Us?</h2>
          </Row>

          <Row className='gy-5'>
            {reasons.map((item, i) =>
              <Stillonthefence key={i}
                title={item.title}
                text={item.text}
                col6={item.col}
                classnumber={item.classnum}
              />
            )}

          </Row>
        </Container>

      </div>


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title='Professional Book Writing and Publishing We Give New Life To Your Words'
          text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default Bookpublishingservices