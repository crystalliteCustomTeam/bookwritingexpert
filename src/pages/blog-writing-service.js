import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import typeofbooks from '/public/images/selfpublishingservices/1.jpg'
import copy from '/public/images/selfpublishingservices/2.jpg'
import marketyourbook from '/public/images/selfpublishingservices/3.jpg'
import publishmybook from '/public/images/selfpublishingservices/4.jpg'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Selfpublishing from '../../components/Selfpublishing'
import Lululogos from '../../components/Lululogos'
import Customersatisfaction from '../../components/Customersatisfaction'
import Bookpublishingservicesweoffer from '../../components/Bookpublishingservicesweoffer'
// css
import styles from '@/styles/Whybookpublishing.module.css'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import Finetoothedbook from '../../components/Finetoothedbook'




const blogWritingService = () => {
  const text = <span>We write, market, and review books of all kinds.</span>;
  const subtext = <span> Profit from our wide range of book publication styles and forms to secure your position as a book writing guru. In addition to publishing children's books, we are among the top Amazon publishing service suppliers.</span>;

  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'><Link className='textdocationnone color-blue hover' href="/blog-writing-service/">Blog Writing Services</Link> to Help You Come Closer <br /> To Your Refined Prospects!</h1>;
  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'Ever wish your audience gets lost in your stories? With blog writing services, our professionals help your dreams turn into reality. It’s not a piece of cake to bring in motivated readers and target customers to the arsenal. However, experts at our company excel at driving promising leads to your website and generating more interest in what you have to offer. Our blog writing services serve as the ideal mode of marketing and advertising for your business or book. So, are you ready to attract new customers and promote your products or services in a positive light? Just give us a call, and let the pros do wonders with our content blog writing services!',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',



    }
  ]




  const geta = <span>Take Off The Marketing Strain From Your Shoulders With Our <Link className='textdocationnone color-blue hover' href="/blog-writing-service/">Online Blog Writing Services!</Link></span>


  const work = <>
    <span>To help authors and business owners nail their marketing efforts, we offer informative and engaging content, better known as blog writing. We know you wear many hats, and marketing may serve as an additional chore on your plate; however, not anymore. Book Writing Experts offers high-quality content more quickly than you could on your own, signifying that your blog section will stay fresh and updated with new content on a regular basis.</span>
    <br /><br />
    <span>Buckle up to attract new customers and fans in the process, and win the race against your competition with our professional blog writing services!</span>
  </>

  const dateset = <span className='fw500'>Hire Us To Establish Yourself As <br /> An Expert In Your Field!
  </span>


  const schema = {

    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/book-publishing-services/"
    },
    "headline": "Providing Full Fledged Book Publishing Services To Our Struggling Authors",
    "description": "Top-Rated Book Publishing Services by Book Writing",
    "image": "https://bookwritingexperts.com/wp-content/uploads/2021/02/publishing.jpg?id=8354",
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
    "url": "https://bookwritingexperts.com/book-publishing-services/",
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
    "url": "https://bookwritingexperts.com/book-publishing-services/",
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

    "@context": "https://schema.org",
    "@type": "Service",
    "name": "book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing",
    "description": "book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing",
    "provider": {
      "@type": "Organization",
      "name": "book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing",
      "url": "https://bookwritingexperts.com/book-publishing-services/"
    },
    "serviceType": ["book publishing services book publishers amazon kdp amazon publishing services kindle direct publishing kdp publishing"],
    "areaServed": {
      "@type": "country",
      "name": "us"
    }

  }
  const fine = [

    {
      img: mission1,
      title: 'Ideas That Are Fresh and Unique!',
      text: 'Our professional blog writers aspire to inspire readers with innovative and unique ideas. Not to mention, the business blog writing services process starts with determining the purpose of the blog based on the client’s needs, i.e., is it about building an audience for an author or about generating leads',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Confidentiality Never Gets Compromised!',
      text: 'We respect our clients and strive to maintain confidentiality in every way possible. By signing an agreement, we ensure that we will never compromise on our clients’ information. So while working with us, rest assured that you are in the right hands. ',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'You Get The Best That Helps You Stand Out From The Rest!',
      text: 'In this step, we bring the writing to the final phase. Needless to say, the process of guest blog writing services includes creating catchy titles, writing interesting and informative content, and adding images or videos to enhance the blog post.',
      class: 'fintop',


    },


  ]
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Get Your Book on Amazon KDP with Top-Rated Book Publishing Services</title>
        <meta name="description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
        <link rel="canonical" href="/book-publishing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services" />
        <meta property="og:description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />
        <meta property="og:url" content="/book-publishing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:04:48+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
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
        text={work}
        Dowecome="publishmybook"

      />


      {/* Makestories */}
      {/* <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Book Publishing Projects'
          para='Let Our Book Publishing Team Help You'
        />
      </div> */}

      {/* Bookpublishingservicesweoffer */}
      {/* <Bookpublishingservicesweoffer /> */}

      {/* <Ourprocess
        title='What Is Our Process of Publishing a Book?'
        text='Without compromising the quality of the finished product, we have developed a complex workflow procedure. We accomplish this through a thorough process that involves informing our clients at each project stage and requesting approvals. This makes the customer more aware of what`s happening at each stage. These six processes, which are listed below, comprise our self-publishing process.'
        heading1='Manuscript Submission'
        para1='The writer contacts us for submission of their full-length manuscript, while submitting, we discuss our publishing rules and sign the contract.'
        num1='01'

        heading2='Peers Review'
        para2='Our experienced editors then review the manuscript and make the required changes with the writer’s permission.'
        num2='02'

        heading3='Formatting and Typesetting'
        para3='After the manuscript is reviewed by editors, our experts do the formatting and add images.'
        num3='03'

        heading4='Book Production'
        para4='We design the first copy of the book and take reviews from the writer. The rest of the books are produced on the same pattern while keeping all the important aspects into consideration.'
        num4='04'

        heading5='Marketing, Publishing, and Distribution'
        para5='Before publishing, we spread awareness about the book to create demand. And Voila! The book is published now!'
        num5='05'
      /> */}


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='Best Blog writing services can help you take your business to the next level by helping you communicate with customers in an informative and engaging way. We help you connect with customers on a more personal level and showcase your unique brand voice.'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>



      {/* <section className={styles.publicservices}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>Why Choose Our Amazon Publishing Services?</h2>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* Selfpublishing */}

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className='color-lightgray   font25   t-center font-f mb-2'>Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Let Your Ideal Audience Go GAGA For <br /> You with Our <Link className='textdocationnone color-blue hover' href="/blog-writing-service/">Blog Writing Service</Link></p>

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
      <Selfpublishing
        title= "Make A World Of Difference In How You Express Yourself & How You Connect With The World!"
        text='With professional blog writers, we help you control the narrative and allow you to share your ideas and thoughts with the world! '
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />

      {/* Whychoosebookwritingcube */}
      {/* <Whychoosebookwritingcube
        title='Our Willingness To Publish Knows No Bounds!'
        text={text}
        subtext={subtext}
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={typeofbooks}
        whychooseclass="marketyourbook"
      /> */}

      {/* Selfpublishing */}
      {/* <Selfpublishing
        title='Want Articles That Boost Engagement And Expand Your Reach?'
        text='Connect with our experienced writers that have the knowledge of the latest industry trends to write gripping articles, paving the way to success for you!'
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={copy}
        whychooseclass="marketyourbook"
      /> */}


      {/* Whychoosebookwritingcube */}
      {/* <Whychoosebookwritingcube
        title='All Of Your Burning Book Marketing Questions- Answered!'
        text='Not sure how to promote or organize your next book debut? You can select the marketing service at Book Writing Experts based on what you want to achieve, and each of our services is concentrated on a few key areas to help you best promote your book.'
        subtext='Whether you are an experienced writer or a beginner, our advice and marketing tactics will help you build a global internet presence. Our book marketing experts will assist your book and brand in achieving the success they deserve.'
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={marketyourbook}
        whychooseclass="marketyourbook"
      /> */}


      {/* Customersatisfaction */}
      <Customersatisfaction />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Lululogos components */}
      <div>
        <Lululogos />
      </div>


      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title='Book Cover Designs That Stand Out'
          text='We are a fantastic choice for cover designs, page layouts, and book designs. We have a group of qualified graphic designers who have created dozens of book covers and page layouts. Our designers will work with you to ensure that your book and cover are supplied according to specifications using all of the information they have. To address any potential technical issues, we offer efficient maintenance for the given files.'

          number="(855) 500 0057"
          discuss="LET'S DISCUSS"

        />

      </div>




















    </>
  )
}

export default blogWritingService