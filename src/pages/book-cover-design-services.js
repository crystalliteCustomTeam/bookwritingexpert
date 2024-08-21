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


const bookCoverDesignServices = () => {

  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Sell More Books With Our Premium <br /><Link className='textdocationnone color-blue hover' href="/book-cover-design-services/">  Book
    Cover Design Services!</Link> </h1>;
  const discuss = <span>LET'S TALK</span>

  const bannertext = [
    {
      title: newSpan,
      pra: "A dull book cover can hold your sales back. Increase your book's appeal and captivate your audience with a stunning cover from expert book cover designers. Partner with us as we are a professional book cover design company that can revamp your book's appearance so that it can grab reader's attention at first glance.",
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',
    }
  ]
  const geta = <span>Increase ROI With The Most Creative <Link className='textdocationnone color-blue hover' href="/book-cover-design-services/">Book Cover Design Services</Link></span>
  const work = <>
    <span>Our team of specialists at Book Writing Experts knows that your book covers are able to obtain the outcomes that you need. That is why our renowned design experts give unique design solutions that are exceptional and ideal for the market where you want to sell.</span>
  </>

  const dateset = <span className='fw500'>100% Satisfaction Guaranteed with <br /> Our <Link className='textdocationnone color-blue hover' href="/book-cover-design-services/">Book Cover Designers!</Link></span>
  const fine = [
    {
      img: mission1,
      title: 'Unmatched Customer Satisfaction',
      text: 'Experience flawless book design services with unlimited free revisions and clear, upfront pricing. Our full-time in-house designers will work closely with you to turn your vision into reality. We deliver the perfect book cover design every time.',
      class: 'fintop',
    },

    {
      img: mission2,
      title: 'Customized Book Cover Design',
      text: 'Our expert book cover designers are supremely experienced and always stay in touch with you to produce a book cover that reflects your imagination. We are focused on providing you with a smooth design experience by focusing on your unique needs and preferences.',
      class: 'fintop',
    },

    {
      img: mission3,
      title: 'Transparent Pricing',
      text: 'Get a full fixed price before you make a payment, with no hidden commissions or hourly rates. Our transparent pricing structure keeps you informed of exactly what you are paying for, ensuring your budget and avoiding a shock of additional costs.',
      class: 'fintop',
    },
  ]

  const selfpublishingDesc = <span>
    First impressions matter a lot for books. Even if you’ve written a bestseller, readers might not
    pick it up if the cover doesn’t catch their eye. Think about your book sitting on a shelf next to
    many others in the same genre. The secret to getting noticed is a cover that stands out.
    <br /><br />
    An eye-catching cover can boost your book’s sales. When people are browsing through many
    options, a great cover can make all the difference. It tells readers that your book is professional
    and worth their time.
    <br /><br />
    Our top book cover designers in US create stunning book covers that help authors maximize
    sales. No matter if it’s on a physical shelf or an online platform like Amazon, our covers will
    make readers want to pick up your book.
    <br /><br />
    With our traditional and ebook cover design services, you’ll get a book cover that helps your
    book shine, both in stores and online. Let us help you make that memorable first impression and
    increase your book’s sales.
  </span>

  const websiteSchemaBookCoverDesignServices = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Book Cover Design Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/book-cover-design-services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  const professionalServiceSchemaBookCoverDesignServices = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Book Cover Design Services | Book Writing Experts",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
    "url": "https://www.bookwritingexperts.com/book-cover-design-services",
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

  const corporationSchemaBookCoverDesignServices = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Book Cover Design Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/book-cover-design-services",
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
        <title>Book Cover Design Services - Book Writing Experts</title>
        <meta name="description" content="Design the best book covers and make your book look
attractive at first glance with our book cover designers for hire. Increase
your book sales today!" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Book Cover Design Services - Book Writing Experts" />
        <meta property="og:description" content="Design the best book covers and make your book look
attractive at first glance with our book cover designers for hire. Increase
your book sales today!" />
        <meta property="og:url" content="/book-publishing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
        <meta property="article:modified_time" content="2023-03-31T12:04:48+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <link rel="icon" href="/favicon.svg" />

        <meta name="DC.title" content="book cover design services, book cover design service, book cover design company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBookCoverDesignServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBookCoverDesignServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBookCoverDesignServices) }}
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

      <Stopworrying
        title2={dateset}
        subtitle3="We're confident you'll love our book cover designs, crafted to captivate readers and boost your
        book's marketability."
        btn1='Get a free Proposal'
        btn2='Free Consultation'
      />

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h3 className='color-lightgray   font25   t-center font-f mb-2'>Cover Design Excellence</h3>

            <h2 className='font50 font-f fw500 colortextgrey t-center pb-2'>Experience Quality &amp; Timely Delivery With The  <br /> Best <Link className='textdocationnone color-blue hover' href="/book-cover-design-services/">Book Cover Design Services</Link> </h2>

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

      {/* Customersatisfaction */}
      <Customersatisfaction />

      <Selfpublishing
        title="Attract Readers With Eye Catching Custom Book Covers"
        text={selfpublishingDesc}
        number="(855) 500 0057"
        discuss="LET'S TALK"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />
      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Lululogos components */}
      <div>
        <Lululogos />
      </div>
      {/* Aspiring */}

      <div className='datacloud'>
        <Aspiring
          title='Stand Out Loud With Our Book Cover Design Service!'
          text="Book Writing Experts is the top choice for best book cover design services. Our clients love us, and our customer list fills up quickly. Why? Because our covers aren't just pretty; they're
          captivating and help sell books. We offer a team of top book cover designers who truly
          understand your book. For self-publishing authors, our custom book covers will make your book
          stand out. Let us design a book cover that truly represents your story."

          number="(855) 500 0057"
          discuss="LET'S DISCUSS"

        />
      </div>
    </>
  )
}

export default bookCoverDesignServices