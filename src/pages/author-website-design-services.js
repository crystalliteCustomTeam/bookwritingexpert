import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import publishmybook from '/public/images/selfpublishingservices/4.jpg'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Aspiring from '../../components/Aspiring'
import Whatourclients from '../../components/Whatourclients'
import Selfpublishing from '../../components/Selfpublishing'
import Lululogos from '../../components/Lululogos'
import Customersatisfaction from '../../components/Customersatisfaction'
// css
import styles from '@/styles/Whybookpublishing.module.css'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import Finetoothedbook from '../../components/Finetoothedbook'

const authorWebsiteDesignServices = () => {
  const text = <span>We write, market, and review books of all kinds.</span>;
  const subtext = <span> Profit from our wide range of book publication styles and forms to secure your position as a book writing guru. In addition to publishing children's books, we are among the top Amazon publishing service suppliers.</span>;

  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Create a Memorable Online Presence with <br /> Our<Link className='textdocationnone color-blue hover' href="/author-website-design-services/"> Author Website Design Services!</Link></h1>;
  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'A well-crafted website serves as a hub for showcasing your work, connecting with readers, and building your personal brand. As a top-grade author website design company, we bring over 12 years of rich experience in creating websites that are visually appealing, highly functional, and customized to meet the unique needs of authors. We’ll help you design a website that supports your career goals, such as growing your readership, promoting your books, or connecting with other writers and industry professionals!',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',
    }
  ]

  const geta = <span>Get Recognized By The World With A Professional And Reliable <Link className='textdocationnone color-blue hover' href="/author-website-design-services/">Author Website</Link></span>


  const work = <>
    <span>An author’s website is the shortest yet easiest way to get the world to know you. If you do not have a professional website yet, it’s time you up your game and get the professionals to make your author website. Be the brand that you have always wanted to be, and get in touch with the Book Writing Experts today to give your name a professional look!</span>
  </>

  const dateset = <span className='fw500'>Hire Expert <Link className='textdocationnone color-blue hover' href="/author-website-design-services/">Author Website Designers</Link> to Create <br /> a User-
    Friendly Website For Your Books!</span>

  const fine = [

    {
      img: mission1,
      title: 'Seamless User Experience',
      text: 'Our expert website designers for authors craft websites with your readers in mind, ensuring a smooth and seamless user experience that keeps them engaged.',
      class: 'fintop',
    },

    {
      img: mission2,
      title: 'Customized Designs',
      text: 'Do you have a design in mind or a fresh concept? Share it with us and our author website designers tailor everything to your preferences.',
      class: 'fintop',
    },

    {
      img: mission3,
      title: 'Affordable Excellence',
      text: 'Our packages are designed to be budget-friendly, so you can get professional website designs for authors without any financial stress.',
      class: 'fintop',
    },

  ]
  const websiteSchemaAuthorWebsiteDesignServices = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Author Website Design Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/author-website-design-services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  const professionalServiceSchemaAuthorWebsiteDesignServices = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Author Website Design Services | Book Writing Experts",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
    "url": "https://www.bookwritingexperts.com/author-website-design-services",
    "telephone": "855-500-0057",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "445 S.Figueroa Street",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90071",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0533717,
      "longitude": -118.2573536
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  }
  const corporationSchemaAuthorWebsiteDesignServices = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Author Website Design Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/author-website-design-services",
    "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Author Website Design Services - Book Writing Experts</title>
        <meta name="description" content="Get professional author website design services to
showcase your books and engage your audience with custom designs,
technology, and storytelling." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Author Website Design Services - Book Writing Experts" />
        <meta property="og:description" content="Get professional author website design services to
showcase your books and engage your audience with custom designs,
technology, and storytelling." />
        <meta property="og:url" content="/book-publishing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
        <meta property="article:modified_time" content="2023-03-31T12:04:48+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <link rel="icon" href="/favicon.svg" />

        <meta name="DC.title" content="author website design services, author website design service, author website design company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaAuthorWebsiteDesignServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaAuthorWebsiteDesignServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaAuthorWebsiteDesignServices) }}
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

      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          subtitle3='Our team of expert-vetted designers can build custom websites that perfectly reflect your unique
              voice and style! We create author website designs that connect deeply with your audience,
              using stunning visuals and seamless navigation.'
          btn1='Get a free Proposal'
          btn2='Talk To Expert'
        />
      </div>

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h3 className='color-lightgray   font25   t-center font-f mb-2'>Author Website Excellence</h3>

            <h2 className='font50 font-f fw500 colortextgrey t-center pb-2'>Enhance Your Digital Identity with <br /> the Best <Link className='textdocationnone color-blue hover' href="/author-website-design-services/">Author
              Website Designers!</Link></h2>

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
        title="Anxious To Get Your Name On A Professional Website?"
        text='We understand the importance of a professional online presence for authors. Having built over
            500+ websites, our book website designers skillfully blend design, technology, and storytelling
            to showcase your books and engage your audience.'
        number="(855) 500 0057"
        discuss="Talk To An Expert"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />

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
          title='Personalized Author Website Design Services For Every
              Storyteller!'
          text='We understand the everyday challenges and opportunities that come along with building a
              writing career, and we know the importance of having a website that does justice to your work.
              We are experts at creating perfect author website designs for writers who want a
              comprehensive showcase of their books. Our author website designers also help established
              authors with an existing audience to upgrade their online presence. Hire author website design
              services from Book Writing Experts to build a website that boosts your book brand!'
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />

      </div>
    </>
  )
}

export default authorWebsiteDesignServices