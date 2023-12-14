import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/businessplanwriting/ss.png'
import mission2 from '/public/images/businessplanwriting/fdf.png'
import mission3 from '/public/images/businessplanwriting/hg.png'
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

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'


const businessplanWringservices = () => {



  var bookrecordingprojects = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const [isSliderActive, setIsSliderActive] = useState(true);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 480) {
        setIsSliderActive(true);
      } else {
        setIsSliderActive(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>  Business Plan Writing Services
    To Help You Follow A Roadmap To Business Success! </h1>;

  const discuss = <span>LET'S DISCUSS</span>


  const bannertext = [
    {
      title: newSpan,
      pra: 'It goes unsaid that a business plan helps business owners secure financing, attract investors, and grow the business. If you need help getting your business off the ground, our team at Book Writing Experts can assist you. We specialize in creating customized business plans that will help you secure funding and launch your company successfully. Our services are affordable, and we offer a free consultation to get started. Contact us today to learn more about how we can help you achieve your business goals!',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'ghostwriting',




    }
  ]


  const geta = <span className='fw700 color-black'>We Know What It Takes To Write A Business Plan That Wins!</span>

  const posdata = <span className='fw700'>We Don’t Write Business Plans <br /> That Don’t Bring Results. </span>

  const datap = <span className=''>We’ve helped countless businesses put together comprehensive and effective business plans, and our professional business plan writer can do the same for you. Buy a business plan online now!

  </span>

  const fine = [

    {
      img: mission1,
      title: 'Researching',
      text: 'This step involves gathering information about your industry, competitors, and target market. We understand the dynamics of your industry and what it takes to succeed in it. This research will also help us develop realistic financial projections for your business.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Planning',
      text: 'The next step is to develop a detailed business plan that includes your business model, marketing strategy, and financial projections. This planning process will help us identify your unique selling proposition and what it will take to achieve your goals.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Writing',
      text: 'Once we have completed research and planning, our experienced writers will be ready to write your business plan. This document will be the roadmap for your business, so it is important to make sure it is clear, concise, and comprehensive. Include an executive summary, company description, market analysis, product/service offering, marketing strategy, financial projections, and management team bios.',
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

  const text = <span>We believe that every business deserves a great plan. Our team of experienced writers will help you create an engaging and professional document, while our creative approach ensures that your plan stands out from the competition. So if you’re looking for an edge in today’s competitive marketplace, book writing expert is the perfect partner for business plan service.

  </span>;


  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookwritingexperts.com/business-plan-writing-services"
    },
    "headline": "Business Plan Writing Services - Book Writing Experts",
    "description": "Business Plan Writing Services offered by Book Writing Experts ensure to turn your dream into a successfully launched and hit business. Call us now.",
    "image": "https://www.bookwritingexperts.com/wp-content/uploads/2021/02/ghost-writing-jpg.jpg?id=8337",
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
    "datePublished": "2022-03-18"
  }

  const schema1 = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/business-plan-writing-services/",
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
    "url": "https://www.bookwritingexperts.com/business-plan-writing-services/",
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
        <title>Business Plan Writing Services - Book Writing Experts</title>
        <meta name="description" content="Business Plan Writing Services offered by Book Writing Experts ensure to turn your dream into a successfully launched and hit business. Call us now." />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Business Plan Writing Services - Book Writing Experts" />
        <meta property="og:description" content="Business Plan Writing Services offered by Book Writing Experts ensure to turn your dream into a successfully launched and hit business. Call us now." />
        <meta property="og:url" content="/business-plan-writing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:00:32+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="6 minutes" />
        <link rel="icon" href="/favicon.svg" />




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
        text='Business plans are important for small businesses and startups because they provide essential guidance on starting and operating a successful business. While many business plans writing companies are out there, Book Writing Experts is peerless.  If you’re ready to take your business to the next level, contact us to get started on your custom business plan. We offer affordable rates and flexible payment plans so that you can get the help you need without breaking the bank. Trust us to help you achieve your business dreams.

        '
        Dowecome="publishmybook"

      />


      {/* Major */}
      <Major />


      {/* Stopworrying */}
      <Stopworrying
        title='Dealing with the stress of formatting your books?'
        title2={posdata}
        subtext={datap}
        btn1='Get a free Proposal'
        btn2='Talk to an expert'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font30 font-f fw500 colortextgrey t-center pb-2'>Three-Step Game Plan to Writing an Effective Business Plan!
            </p>

          </Row>

          {isSliderActive ?
            <Slider {...bookrecordingprojects}>

              {fine.map((item, i) =>
                <Finetoothedbook key={i}
                  title={item.title}
                  text={item.text}
                  classtop={item.class}
                  img1={item.img}
                  btn={item.btn}
                />
              )}
              </Slider>
              :



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
          }
            </Container>
      </div>



      <Ourprocess
        title='Our Modernized Business Plan Writing Process'

        heading1='Business Plan Brief'
        para1='We will discuss your business ideas with you and get to know your business inside and out. This step is crucial in order to develop a custom-tailored plan that will set you up for success.'
        num1='01'

        heading2='Comprehensive Research'
        para2='We’ll conduct market research and feasibility studies to ensure that your business idea has potential.'
        num2='02'

        heading3='Create a Financial Model'
        para3='We’ll create a detailed financial model for your business, including pro forma statements and cash flow projections.'
        num3='03'

        heading4='Write the Plan'
        para4='We’ll craft a well-written and convincing executive summary that will capture the attention of investors and lenders.'
        num4='04'

        heading5='Final Document'
        para5='Finally, we’ll put everything together in a professional business plan document that you can use to raise capital and grow your business.'
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
          title='Helping Entrepreneurs And Small Businesses Achieve Their Goals'
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
          title='Professional Business Plan Writing Services We Give New Life To Your Words'
          text="Your idea is unique, and you need a company that will take it from start to finish. We are here for all the steps, so your legacy can live in words."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>


    </>
  )
}

export default businessplanWringservices