import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import bookmarketingservices1 from '/public/images/bookmarketingservices/1.png'
import bookmarketingservices2 from '/public/images/bookmarketingservices/2.png'
import bookmarketingservices3 from '/public/images/bookmarketingservices/3.png'
import bookmarketingservices4 from '/public/images/bookmarketingservices/4.png'


// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Lululogos from '../../components/Lululogos'
import Selfpublishing from '../../components/Selfpublishing'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Major from '../../components/Major'

// css
import styles from '@/styles/Whybookpublishing.module.css'




const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50  color-white font-f hero-span'> Leave Your Mark Forever: Our <Link className='textdocationnone fw700 color-blue hover' href="/book-marketing-services"> Book Marketing Services </Link> <span className='font50   color-white font-f hero-span'>Will Ensure Your Book To Leave a Lasting Impression!</span>   </h1>;

  const discuss = <span>Market Your Book Now!</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'Is Your Book Ready to Be Read, But Struggling to Reach Its Target Audience?',
      discuss: discuss,
      homebannernum: 'Call Our Team At (213) 289 3888',
      banlogo: homebannerlogos,
      banners: 'bookpromotionservices',




    }
  ]

  const geta = <span>Book Promotion Has Just Become Easier With The Global <Link className='color-blue textdocationnone hover fw700' href='/book-marketing-services'>Book Marketing Services.</Link></span>


  const posdata = <span>Let Us Put Your Book On The Fast Track To Success With the Dynamic And Innovative <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>Book Marketing</Link> Strategies Of Our Team!</span>


  const missiontext = <span>With our comprehensive <Link className='textdocationnone color-black hover1' href='/book-marketing-services'>book marketing services</Link>, we'll position you as the go-to expert in your field. Through targeted outreach, thought leadership initiatives, and strategic branding, we'll amplify your visibility and establish your authority. Partner with us, and let us unlock your full marketing potential.</span>

  const experienced = <span>Our experienced and award-winning team of <Link className='textdocationnone color-black hover1' href='/book-marketing-services'>book marketing</Link> experts goes the extra mile to deliver customized services designed specifically for you. With our bespoke and personalized approach, we not only help you secure valuable reviews but also market your book effectively and ensure maximum success.</span>

  const fine = [

    {
      img: mission1,
      title: 'Ignite Your Book`s Success With Creative Marketing Strategies',
      text: (
        <>
          At <b>Book Writing Experts</b>, our marketing experts possess a remarkable talent for promotions, leveraging their expertise to captivate audiences through imaginative marketing campaigns. Each campaign is strategically designed to entice your target audience and compel them to delve into the pages of your book.
        </>
      ),
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Be the Author Everyone Turns to',
      text: missiontext,
      class: 'fintop',


    },

    {
      img: mission3,
      title: 'Customized Services for Your Unique Needs',
      text: experienced,
      class: 'fintop',


    },


  ]

  const dateset = <span className='fw500'>Looking for a  <br></br><Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'> Book Marketing Expert</Link>? </span>

  const potential = <span> Path to Book Marketing: Discover the Potential Of Our <Link className='textdocationnone colorexpertgrey hover1' href='/book-marketing-services'>Book Marketing Agency</Link> </span>


  const marketing = <span>At <b>Book Writing Experts</b>, we prioritize effective communication and transparency in the <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing</Link> process. Through our meticulous procedure, we keep our clients informed at every stage, providing clarity on our perspective and delivering regular updates. Go through our process:</span>

  const experts = <span>As experts in <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing</Link>, we understand that successful promotion requires a step-by-step plan. Our comprehensive marketing strategy will target the right readers, at the right time and place, with the correct budget to sell more copies of your manuscripts.</span>

  const plan = <span>A marketing plan is crucial to keep your content focused. Our <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing experts</Link> ensure that your book has more visibility and reaches people who are searching for exactly what you offer.</span>

  const create = <span>We have a multitude of <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing</Link> strategies in place, ensuring that your book becomes a huge success. The experts of our <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing agency</Link> focus on the dynamic landscape of marketing and work closely to create a tailored strategy that aligns with your goals and objectives.</span>

  const wise = <span>It's time to let our <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing experts</Link> guide you and promote your book effectively. Your story deserves to be heard by a wide audience, but be sure to avoid shady agencies that could damage your book's reputation. Trust in the expertise of marketing professionals to ensure success. Don't risk it – choose wisely.</span>


  const support = <span>We understand that getting your book noticed in today's crowded marketplace can be a challenge. Our <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing services</Link> are designed to increase your visibility across all major platforms, including social media, email marketing, and book review sites.</span>

  const second = <span>Your Book in Good Hands: Our Team of Experienced <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>Book Marketing</Link> Professionals: </span>


  const demands = <span>Our team is made up of experienced <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing</Link> professionals, and creatives who have a deep understanding of the book industry. From crafting compelling email campaigns to designing eye-catching book covers, we have the skills you need to succeed.</span>

  const impressive = <span>Making Your Dream a Reality: Our Results-Driven Approach to <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>Book Marketing</Link> </span>

  const tailored = <span> Our <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing company</Link> delivers best results. We set clear goals and measure our success against them. Whether you're looking to increase your book's sales, build your author platform, or generate buzz around a new release, we have the tools and expertise you need to achieve your goals.</span>

  const industry = <span>Turn the Tables on the Book Industry with Our <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>Book Marketing Service</Link>!</span>

  const challenging = <span>Ready to take your book from 'just another story' to a literary sensation? Join forces with us and let's create a <Link className='textdocationnone color-blue hover1' href='/book-marketing-services'>book marketing</Link> strategy that will make your book stand out in a sea of competitors. Don't go at it alone - let's make your story the talk of the town!</span>



  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/book-marketing-services/"
    },
    "headline": "Connect To The Best Book Marketing Service Providers In Town!",
    "description": "Book Marketing Services",
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
    "datePublished": "2022-03-18"
  }
  const schema1 = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "bookwritingexperts",
    "alternateName": "Book Writing Experts",
    "url": "https://bookwritingexperts.com/book-marketing-services/",
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
    "url": "https://bookwritingexperts.com/book-marketing-services/",
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
    "name": "book marketing services book marketing company book marketing agency best book marketing services book advertising services",
    "description": "book marketing services book marketing company book marketing agency best book marketing services book advertising services book marketing services book marketing company book marketing agency best book marketing services book advertising services",
    "provider": {
      "@type": "Organization",
      "name": "book marketing services book marketing company book marketing agency best book marketing services book advertising services",
      "url": "https://bookwritingexperts.com/book-marketing-services/"
    },
    "serviceType": ["book marketing services book marketing company book marketing agency best book marketing services book advertising services"],
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
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Book Marketing Services - Book Writing Experts</title>
        <meta name="description" content="Book Marketing Services that makes you your readers&#039; most sought-after choice. Count on us to be counted worldwide. Hire us to get the job done." />
        <link rel="canonical" href="/book-marketing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Book Marketing Services - Book Writing Experts" />
        <meta property="og:description" content="Book Marketing Services that makes you your readers&#039; most sought-after choice. Count on us to be counted worldwide. Hire us to get the job done." />
        <meta property="og:url" content="/book-marketing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T11:37:31+00:00" />
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
        text='Book Writing Experts now markets your book with successful Global marketing support; our professionals help the author promote their books and reach their audience even at the far corners of the world. Internet gives us a platform to create bespoke ads for the readers and attract them to buy your book. Our book marketing experts are dedicated to getting you as much revenue as they can as soon we publish your book. Be at ease and trust Book Writing Experts with your marketing and publishing jobs.'
        subtext='We promise to enhance your book visibility with Global exclusive marketing tactics.'
        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      <Stopworrying
        title='Are You Seeking For a Swift Solution to Reach a Mass Readership?'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Chat With Our Book Marketing Experts Now!'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="color-lightgray   font25   t-center font-f mb-2">Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Commence on Literary Triumph with Our Online <Link className='textdocationnone color-blue hover fw700' href='/book-marketing-services'>  Book Marketing Services</Link> Attracting New Readers!</p>

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
        title={potential}
        text={marketing}

        heading1='The Comprehensive Marketing Plan:'
        para1={experts}
        num1='01'

        heading2='Social Media and Additional Media Channels:'
        para2='We will analyze your target audience and create content that will reach them effectively. This includes deciding on the right platform, content type, and format, such as creating a book trailer or using Facebook ads. We will keep you informed of all decisions made beforehand.'
        num2='02'

        heading3='Marketing Plan Implementation:'
        para3={plan}
        num3='03'

        heading4='Target Audience:'
        para4='Every reader is interested in a certain favorite genre. Therefore, we create a targeted strategy to focus on those who are most likely to be interested in your book. This will increase the number of prospective readers and ensure your book is a success.'
        num4='04'

        heading5='Effective Marketing Strategy is What is Needed:'
        para5={create}
        num5='05'
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text={wise}
          btn1='Get a free Proposal'
          btn2='Chat With our Experts!'
        />
      </div>





      <section className={styles.servicetitle}>
        <Container>
          <Row>
            <Col>

              <h2 className='color-blue fw700 font50 font-f t-center'>Why Settle for Ordinary When You Can Have Extraordinary? Discover Our <Link href='/book-editing-services' className='textdocationnone colortextgrey hover'>Book Marketing Services</Link> Today!  </h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Selfpublishing */}
      <Selfpublishing
        title='Our Personalized Approach to Strategic Planning:'
        text={<>We understand that getting your book visibility in today's crowded marketplace can be a challenge. Our <Link href='/book-marketing-services/' className='textdocationnone textcolor hover'>book marketing services</Link> are designed to increase your visibility across all major platforms, including social media, email marketing, and book review sites.</>}
        subtext={<>We believe in developing a comprehensive, tailored marketing strategy for every book we work with. Our experienced <Link href='/book-marketing-services/' className='textdocationnone textcolor hover'>book marketing</Link> professional carefully analyzes your book, target audience, and market trends to develop a roadmap that will help you achieve your goals. From crafting compelling email campaigns to designing eye-catching book covers, we focus on increasing your book's sales, building your author platform, and generating buzz around your new release.</>}
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices1}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Our Unique Approach to Boosting Visibility:'
        text={support}
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices2}
        whychooseclass="marketyourbook"
      />



      {/* Selfpublishing */}
      <Selfpublishing
        title={second}
        text={demands}
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={bookmarketingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title={impressive}
        text={tailored}
        number="(213) 289 3888"
        discuss="Let’s Discuss Your Project"
        image={bookmarketingservices4}
        whychooseclass="marketyourbook"
      />


      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}
      <Lululogos />


      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title={industry}
          text={challenging}
          number="Call Our Team - (213) 289 3888"
        />

      </div>























    </>
  )
}

export default Bookpublishingservices