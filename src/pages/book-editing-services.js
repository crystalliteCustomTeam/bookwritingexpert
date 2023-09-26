import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// images
import homebannerlogos from '/public/images/bannerimages/logos.png'
import mission1 from '/public/images/mission/1.png'
import mission2 from '/public/images/mission/2.png'
import mission3 from '/public/images/mission/3.png'
import whychooseourbookeditingservices1 from '/public/images/whychooseourbookeditingservices/1.png'
import whychooseourbookeditingservices2 from '/public/images/whychooseourbookeditingservices/2.png'
import whychooseourbookeditingservices3 from '/public/images/whychooseourbookeditingservices/3.png'
import whychooseourbookeditingservices4 from '/public/images/whychooseourbookeditingservices/4.png'
// components
import Banner from '../../components/Banner'
import Dowecome from '../../components/Dowecome'
import Stopworrying from '../../components/Stopworrying'
import Finetoothedbook from '../../components/Finetoothedbook'
import Aspiring from '../../components/Aspiring'
import Ourprocess from '../../components/Ourprocess'
import Whatourclients from '../../components/Whatourclients'
import Makestoriesnew from '../../components/Makestoriesnew'
import Lululogos from '../../components/Lululogos'
import Whychoosebookwritingcube from '../../components/Whychoosebookwritingcube'
import Selfpublishing from '../../components/Selfpublishing'
import Major from '../../components/Major'
import Cta from '../../components/Cta'
// css
import styles from '@/styles/Whybookpublishing.module.css'

const Bookpublishingservices = () => {

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Polish your words and turn them into literary gold with</span> <Link className='textdocationnone color-blue hover' href="/book-editing-services"> Professional Book Editing Services </Link></h1>;

  const ideas = <span> <Link className='textdocationnone color-blue hover' href="/book-editing-services">Hire book editors</Link> and transform your manuscript into a page-turning sensation that leaves readers craving for more.</span>


  const discuss = <span>Book Your Free Consultation Now!</span>



  const bannertext = [
    {
      title: newSpan,
      pra: ideas,
      discuss: discuss,
      homebannernum: 'Call Us Now At (213) 289 3888 ',
      banlogo: homebannerlogos,
      banners: 'bookeditingservices',




    }
  ]

  const geta = <span>Reliable <Link className='color-blue textdocationnone hover fw700' href='/book-editing-services'> Editing Solutions <br></br> </Link> For All!</span>

  const posdata = <span>Let The  <Link className='textdocationnone color-blue fw700 hover' href='/book-editing-services'>Best Book Editing Service </Link> Rescue Your Manuscript</span>



  const finetitle = <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Book Editing Service</Link>

  const finepare = <span> While grammar checkers and self-editing can catch some errors, a professional book editor brings a superior level of proficiency into your work. Hiring a <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>book editing company</Link> is an investment in the success of your book. </span>



  const finetitle1 = <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Novel Editing Service</Link>

  const finepare1 = <span> <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Novel editors</Link> refine your words, make your characters shine, and your plots thrive. Get in touch with the Book Writing Experts, the sorcerers of storytelling and <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>novel editing</Link>. Never settle for less!</span>

  const finetitle2 = <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Non-Fiction Editing Service</Link>

  const finepare2 = <span> <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Non-fiction editing</Link>, the art of transforming raw facts into a captivating narrative – Infuse your words with clarity, precision, and a touch of literary magic. Don't let your ideas languish in mediocrity and hire <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>non-fiction editors</Link> to make your book successful.</span>


  const title2 = <span>A Glimpse into Our <Link className='textdocationnone colortextgrey fw700 hover1' href='/book-editing-services'>Book Editing</Link> Process</span>

  const fine = [

    {
      img: mission1,
      title: finetitle,
      text: finepare,
      class: 'fintop',


    },

    {
      img: mission2,
      title: finetitle1,
      text: finepare1,
      class: 'fintop',


    },

    {
      img: mission3,
      title: finetitle2,
      text: finepare2,
      class: 'fintop',


    },


  ]

  const dateset = <span>Are You Ready to Bid Farewell to <br /> the Nightmares of <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Book Editing</Link>? </span>


  const maketitle = <span>Our Portfolio of <Link href='/book-editing-services' className='textdocationnone colortextgrey hover'> Book Editing</Link> Projects</span>

  const book = <span>Words Perfected, Stories Enhanced - By our  <Link className='textdocationnone color-blue hover' href='/book-editing-services'>book editors</Link> for a flawless reading experience!</span>

  const then = <span>Our expert <Link className='textdocationnone color-blue hover' href='/book-editing-services'>book editors</Link> read your manuscript, line by line, and add suggestions to refine sentence structure, enhancing clarity, and ensuring grammatical accuracy to elevate the overall readability.</span>

  const collect = <span>Don't let your book collect dust on the shelf of mediocrity, hire the best <Link className='textdocationnone color-blue hover' href='/book-editing-services'>book editors</Link>  to polish your manuscript to perfection. </span>

  const Editing = <Link className='textdocationnone colortextgrey hover' href='/book-editing-services'>Developmental  Editing  Service</Link>

  const matters = <span>We understand the importance of every word, which is why our <Link className='textdocationnone color-blue hover1' href='/book-editing-services'>developmental editors</Link> are committed to edit and proofread stories of any length and style. Hire our <Link className='textdocationnone color-blue hover1' href='/book-editing-services'>developmental editing company</Link> for editing and book formatting services.</span>

  const structural = <Link className='textdocationnone colortextgrey hover' href='/book-editing-services'>Structural Editing Service</Link>

  const turn = <span>Our <Link className='textdocationnone color-blue hover' href='/book-editing-services'>structural editors</Link> scrutinize your book's structure, flow, and coherence to ensure a smooth reading experience. Hiring our <Link className='textdocationnone color-blue hover' href='/book-editing-services'>structural editing company</Link> will help you develop a well-paced, compelling story that keeps readers engaged from beginning to end.</span>

  const approach = <Link className='textdocationnone colortextgrey hover' href='/book-editing-services'>Copy Editing Service</Link>

  const purview = <span>Trust our <Link className='textdocationnone color-blue hover' href='/book-editing-services'>copy editing company</Link> to improve language, grammar, and punctuation. Our copy editors pay close attention to every word, sentence, and paragraph to ensure clarity, and <Link className='textdocationnone color-blue hover' href='/book-editing-services'>professional editing</Link>. We eradicate errors and refine your prose with perfection.</span>

  const mishaps = <span>Tired of Manuscript Mishaps? Hire A <br></br> <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Book Editing Company</Link>! </span>

  const errorless = <span>Connect with us and experience the <Link className='textdocationnone color-blue hover' href='/book-editing-services'>best book editing service</Link> in the US.</span>

  const glance = <span> Through the Complexity of <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Book Editing</Link>, Let Our Professional Book Editors Illuminate Your Path! </span>

  const perplexing = <span>Let us help you navigate the maze of <Link className='textdocationnone color-blue hover' href='/book-editing-services'>book editing</Link>, proofreading, and self-publishing. your manuscript will become a best seller with our expert team of <Link className='textdocationnone color-blue hover' href='/book-editing-services'>book editors</Link>. Call, text, or email us today to make your dream of becoming an author a reality!</span>


  const schema = {


    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bookwritingexperts.com/book-editing-services/"
    },
    "headline": "Professional Book Editing Services For All The Idealists Within Their Reach",
    "description": "Book Editing Services",
    "image": "https://bookwritingexperts.com/wp-content/uploads/2021/02/editing-jpg.jpg?id=8355",
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
    "url": "https://bookwritingexperts.com/book-editing-services/",
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
    "url": "https://bookwritingexperts.com/book-editing-services/",
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
    "name": "book editing services book editing company book editors",
    "description": "book editing services book editing company book editors book editing services book editing company book editors book editing services book editing company book editors",
    "provider": {
      "@type": "Organization",
      "name": "book editing services book editing company book editors",
      "url": "https://bookwritingexperts.com/book-editing-services/"
    },
    "serviceType": ["book editing services book editing company book editors"],
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
        <title>Professional Book Editing Services - Book Writing Experts</title>
        <meta name="description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />
        <link rel="canonical" href="/book-editing-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Book Editing Services - Book Writing Experts" />
        <meta property="og:description" content="Book editing services that fixes the writing flaws and make your book a flawless piece of content. Hire us today to get them at affordable pricing." />
        <meta property="og:url" content="/book-editing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-03-31T12:01:27+00:00" />
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
        text='Errors are inevitable! But the solutions are not! The professional editing experts at Book Writing Experts leave no gaps in assisting your writing drafts with top-notch, unique, and customized editing solutions. We further take complete guarantee of what we deliver and keep client satisfaction above everything.'
        Dowecome="publishmybook"

      />

      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />

      {/* Makestories */}
      <div className='dataSetCo sliderImg'>
        <Makestoriesnew
          title={maketitle}
          para={book}
        />
      </div>


      {/* Stopworrying */}
      <Stopworrying
        title='Lost in the Editing Maze? Or Trapped in the Editing Enigma?'
        subtitle={posdata}
        btn1='Get a free Proposal'
        btn2='Chat With Us Now!'
      />



      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className="colortextgrey font25 t-center font-f mb-2"> <Link className='textdocationnone color-blue hover' href='/book-editing-services'>Book Editing Services</Link> That We’re Offering</h2>

            <p className='font50 font-f fw500  colortextgrey t-center pb-2'> Find The Best Editing Style For Your Manuscript </p>

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
        title2={title2}
        heading1='In-Depth Manuscript Analysis'
        para1='We meticulously review every aspect of your book, analyzing its structure, pacing, character development, and plot coherence to identify areas for improvement and enhancement.'
        num1='01'

        heading2='Line-by-Line Editing'
        para2={then}
        num2='02'

        heading3='Comprehensive Feedback'
        para3='We provide valuable feedback to help you strengthen your narrative, amplify emotional resonance, and tighten the storytelling, resulting in a compelling and unforgettable reading experience.'
        num3='03'

        heading4='Collaborative Author-Editor Partnership'
        para4='Book Writing Experts believe in fostering a collaborative relationship with you, working closely together to maintain the authenticity of your voice while editing the manuscript.'
        num4='04'

        heading5='Quality Assurance '
        para5='Our rigorous book QA ensures that your book undergoes a final review, ensuring that all edits have been implemented carefully and your manuscript is ready for publication.'
        num5='05'


      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={dateset}
          text={collect}
          btn1='Get a free Proposal'
          btn2='Chat With Us To Get Your Book Edited Today!'
        />
      </div>






      <section className={styles.servicetitle}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>Choose the Best: Hire <br></br> <Link className='textdocationnone colortextgrey hover' href='/book-editing-services'>Top Book Editing Company</Link> in The US  </h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Selfpublishing */}
      <Selfpublishing
        title={Editing}
        text={matters}
        number="(213) 289 3888"
        discuss="Hire The Best Book Editing Company Now!"
        image={whychooseourbookeditingservices1}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Editorial Assessment Service'
        text='Our editorial assessment provides you with a comprehensive evaluation of your manuscript, highlighting its strengths and areas for improvement. With our expert analysis and detailed recommendations, you`ll gain valuable insights into your writing style, plot structure, pacing, and more.'
        number="(213) 289 3888"
        discuss="LET'S DISCUSS"
        image={whychooseourbookeditingservices2}
        whychooseclass="marketyourbook"
      />



      {/* Selfpublishing */}
      <Selfpublishing
        title={structural}
        text={turn}
        number="(213) 289 3888"
        discuss="Chat With Us Now! "
        image={whychooseourbookeditingservices3}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title={approach}
        text={purview}
        number="(213) 289 3888"
        discuss="Discuss Your Project and Get Started With Us!"
        image={whychooseourbookeditingservices4}
        whychooseclass="marketyourbook"
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={mishaps}
          text={errorless}
          btn2='Chat With Our Experts Today!'
        />
      </div>



      {/* Talk To Our Whatourclients! */}
      <Whatourclients />


      {/* Lululogos components */}


      <Lululogos />



      {/* Aspiring */}
      <div className='datacloud'>
        <Aspiring
          title={glance}
          text={perplexing}
          number="Call Us At (213) 289 3888 "
        />
      </div>




    </>
  )
}

export default Bookpublishingservices