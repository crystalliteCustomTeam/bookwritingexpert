import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Stillonthefence from '../../components/Stillonthefence'
import Major from '../../components/Major'
// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 color-white font-f hero-span'> Refine Your Book with Impeccable Mastery through our Professional <Link className='textdocationnone fw700 color-blue hover' href="/book-proofreading-services">Book Proofreading Services</Link>!</h1>;

  const discuss = <span>Hire The Best Book Proofreading Services!</span>




  const bannertext = [
    {
      title: newSpan,
      pra: (
        <>
          At <b>Book Writing Experts</b>, our team of expert proofreaders possesses years of invaluable experience, having worked on numerous projects with utmost professionalism and skill.

        </>
      ),
      discuss: discuss,
      homebannernum: 'Call Us At (213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'offeringyoubook',




    }
  ]



  const reasons = [

    {
      title: 'Impeccable Precision',
      text: (
        <>
          Our professional <b>book proofreading services</b> ensure every detail of your manuscript is thoroughly reviewed and refined to achieve flawless perfection. We leave no room for errors or inconsistencies.

        </>
      ),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Enhanced Credibility',
      text: (
        <>
          By investing in our <Link className='textdocationnone color-blue hover' href='/book-proofreading-services'>book proofreading services</Link>, you elevate the credibility of your work. Our meticulous attention to detail ensures that your content is polished, professional, and worthy of admiration.

        </>
      ),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Reader Satisfaction',
      text: (
        <>
          Engage and captivate your readers with a seamless reading experience. Our <Link className='textdocationnone color-blue hover' href='/book-proofreading-services'>professional proofreading services</Link> guarantee a smooth flow, free from distractions and grammatical blunders, immersing your audience in your story.

        </>
      ),
      col: '6',
      classnum: 'number',
    },

    {
      title: 'Professional Polish',
      text: 'Make your book stand out in the competitive publishing world. Our expert proofreaders bring a professional touch to your manuscript, ensuring it meets industry standards and showcases your dedication to quality.',
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Time-Saving Efficiency',
      text: (
        <>
          Let us handle the time-consuming task of <Link className='textdocationnone color-blue hover' href='/book-proofreading-services'>book proofreading</Link>, allowing you to focus on your writing and other essential aspects of your publishing journey. Our efficient services deliver prompt results without compromising quality.

        </>
      ),
      col: '6',
      classnum: 'number',
    },
    {
      title: 'Confidence in Publication',
      text: (
        <>
          With our expert <Link className='textdocationnone color-blue hover' href='/book-proofreading-services'>book proofreading services</Link>, you can confidently approach the publishing process and we assure that your book is thoroughly vetted and ready for publication, eliminating any worries or uncertainties.

        </>
      ),
      col: '6',
      classnum: 'number',
    },


  ]


  const geta = <span> <Link className='color-blue textdocationnone hover fw700' href='/book-proofreading-services'>Professional Proofreading Services</Link> to Turn Your Words into a Masterpiece!</span>





  const fine = [

    {
      img: mission1,
      title: 'Unparalleled Expertise',
      text: (
        <>
          <b>Book Writing Experts</b> has a team of professional <Link className='color-black textdocationnone hover1' href='/book-proofreading-services'>book proofreading</Link> specialists who meticulously review every book before it goes to print. Our experts ensure error-free text and adherence to <Link className='color-black textdocationnone hover1' href='/book-proofreading-services'>book publishing</Link> standards, recognizing the vital role of proofreading in the publishing process.
        </>
      ),
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Swift Turnaround',
      text: 'We prioritize prompt delivery, acknowledging the significance of meeting deadlines. With our commitment to efficiency, we work diligently to prepare your book for publication within an expedited time frame, allowing you to reach the hands of eager readers swiftly.',
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Uncompromising Quality     ',
      text: (
        <>
          <b>Book Writing Experts</b> is the epitome of excellence for self-publishing authors seeking a trusted partner. We comprehend the importance of achieving perfection in your book and stand by you in the journey. Rely on us to refine your work to its finest form, ensuring your readers a polished and captivating experience.

        </>
      ),
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Seeking an Expert for  <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'> Book Proofreading Services</Link>?  </span>

  const addlink = <>
    Delve Into The World of Excellent <Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'>Book Proofreading Services</Link>!
  </>

  const pc = <>

    Refine, Enhance, and Elevate Your Masterpiece with Our Exceptional <Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'>Book Proofreading Services</Link>!

  </>

  const receives = <>

    Refining Your Book To Perfection Through Expert <Link className='textdocationnone colortextgrey hover fw700' href='/book-proofreading-services'>Book Proofreading</Link>  Process

  </>

  const qualified = <>

    When the going gets tough, rely on our team of qualified editors to lend a helping hand. Contact us to enlist their expertise in reviewing your paper and rectifying any mistakes. Whether it's a minor oversight or a significant grammatical error, our <Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'>book proofreading services</Link> team will ensure your work is flawlessly polished before you submit it.

  </>



  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/proofreading-services/"
    },
    "headline": "Proofreading Services",
    "description": "Offering You The Impeccable Proofreading Services To Help You Earn Your Readers’ Trust!",
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
    "url": "https://bookwritingexperts.com/book-proofreading-services/",
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
    "url": "https://bookwritingexperts.com/book-proofreading-services/",
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
    "url": "https://bookwritingexperts.com/book-proofreading-services/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bookwritingexperts.com/proofreading-services/search?q={search_term_string}",
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
        <title>Best Book Proofreading Services - Book Writing Experts</title>
        <meta name="description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
        <link rel="canonical" href="/book-proofreading-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best Book Proofreading Services - Book Writing Experts" />
        <meta property="og:description" content="Book Proofreading services make your manuscript flawless. Avail the services today from the experts who are adept at keeping an eagle eye on errors." />
        <meta property="og:url" content="/book-proofreading-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:03:57+00:00" />
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


      {/* partners components */}






      {/* Dowecome */}
      <Dowecome
        title={geta}
        text='Or aim is to provide our clients with quality feedback and a holistic solution. Our proofreaders are minesweepers who ensure your manuscript free from inconsistencies, errors and formatting mistakes. This will in turn greatly enhance your final product for the reader to praise and enjoy!'

        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      <Stopworrying
        title={addlink}
        subtitle={pc}
        btn1='Get a free Proposal'
        btn2='Need To Discuss? Chat With Our Expert!'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="colortextgrey   font25   t-center font-f mb-5">Achieve Perfection In Your Work with Our  <Link className='textdocationnone color-blue hover fw700' href='/book-proofreading-services'>Proofreading Services</Link>!</h2>


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
        title={receives}

        heading1='Embarking on the Journey!'
        para1='The proofreading process commences as our skilled team receives your manuscript or book.'
        num1='01'

        heading2={`Unleashing Our Editor's Expertise!`}
        para2='Every identified mistake is meticulously corrected, refining the manuscript with utmost precision.'
        num2='02'

        heading3='Witness Your Book Transformed into Perfection!'
        para3='Through this meticulous process, we deliver a flawlessly written book, free from any errors.'
        num3='03'

        heading4='Adding the Final Flourishes to the Canvas!'
        para4='Our expert proofreaders conduct a comprehensive review, ensuring no mistakes or omissions remain.'
        num4='04'

        heading5='The Ultimate Quest for Consistency!'
        para5='In the final stage, our proofreaders conduct a thorough examination, addressing any last-minute errors or inconsistencies in the text.'
        num5='05'


      />





      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3={`Don't settle for shady agencies that may jeopardize your book's reputation. Your story deserves to be heard by a mass audience, and we're here to ensure your book reaches the right audience with integrity and professionalism.`}
          btn1='Get a free Proposal'
          btn2='Chat With Us To Seek Our Expertise'
        />
      </div>




      {/* Talk To Our Whatourclients! */}
      <Whatourclients />































      {/* Stillonthefence component */}

      <Container fluid className='still'>


        <Row >
          <h2 className='font50 fw700 color-blue t-center font-f mb-5'>Why Should You Spend Time On Our Expert Proofreading Services?</h2>
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





      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title={`Navigating Rough Waters? We've Got Your Back!`}
          text={qualified}
          number="Call Now At (213) 289 3888"
        />

      </div>








    </>
  )
}

export default Bookpublishingservices