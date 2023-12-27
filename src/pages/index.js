import Head from 'next/head'
import Link from 'next/link'
import homebannerlogos from '/public/images/bannerimages/logos.png'
import homebanlogos2 from '/public/images/bannerimages/homebannerlogos2.webp'
import whychoose from '/public/images/whychoosebooks/bg-img.png'
// import components
import Homebanner from '../../components/Homebanner'
import Partners from '../../components/Partners'
import Whychoosebook from '../../components/Whychoosebook'
import Gotastory from '../../components/Gotastory'
import Experts from '../../components/Experts'
import Whatourclients from '../../components/Whatourclients'
import Requestafreequote from '../../components/Requestafreequote'
import Stopworrying from '../../components/Stopworrying'
import Customersatisfaction from '../../components/Customersatisfaction'
import Comprehensive from '../../components/Comprehensive'
import Strugglingtogive from '../../components/Strugglingtogive'
import Strugglingwriters from '../../components/Strugglingwriters'
import Onestepsolutions from '../../components/Onestepsolutions'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import NewPopup from '../../components/NewPopup'


export default function Home() {


  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to get window width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const exprtSpan = <span className='fw500 font50 color-white font-f t-center font-f mb-4'><span className='color-blue fw700'><Link className='dblockmobile color-blue hover textdocationnone' href="/">Book Writing Experts</Link></span> Is waiting for you to Ask for a <span className='color-blue fw700'><Link className='dblockmobile color-blue hover textdocationnone' href="/">Professional Ghostwriter</Link></span></span>;

  const newSpan = <h1 className='font50 fw700 color-blue font-f hero-span'> <span className=''>Your ONE-STOP</span> <Link className='dblockmobile textdocationnone color-blue hover' href="/"> Ghostwriting, Editing And Publishing Service </Link>  <span className=''>Provider!</span> </h1>;

  const posdata = <span>Let Our Best <Link className='dblockmobile textdocationnone color-blue hover fw700' href='/book-publishing-services'>Amazon Kindle Direct Publishing (KDP)</Link>Service Providers Handle All Your Publishing Troubles!</span>

  const discuss = <span>LET'S DISCUSS</span>


  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookwritingexperts.com/"
    },
    "headline": "Book Writing Company",
    "description": "book writing company",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
    "author": {
      "@type": "Organization",
      "name": "book writing company",
      "url": "https://www.bookwritingexperts.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "book writing company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
      }
    },
    "datePublished": ""
  }

  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 5000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <>


      <Head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Professional Book Writing Services Company</title>
        <meta name="description" content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Book Writing Services Company" />
        <meta property="og:description" content="Book Writing Services that transform your ideas to the best-selling book. Call us if you need help writing a book or penning down your thoughts." />
        <meta property="og:url" content="https://www.bookwritingexperts.com/" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="13 minutes" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="DC.title" content="book writing company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />



      </Head>


      {/* googletagmanager */}

      {imagesLoaded &&

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K994MT85"
          height="0" width="0" className='d-none'></iframe></noscript>
      }

      <main>
        {/* banner components */}

        <Homebanner
          title={newSpan}
          text='We understand being an author is a challenging yet respectable profession, but not everybody is lucky enough to become one.'
          discuss={discuss}
          homebannernum='(855) 500 0057'
          homebanlogos={homebannerlogos}
          homebanlogos2={homebanlogos2}
          bannershome='banner'
          homebancan='newbannerclass'
        />

        {/* <NewPopup /> */}


        {/* partners components */}
        <Partners />

        <Strugglingtogive
          title=""
          text="You may be a victim of the following nuisances"
          list1="Slow Productivity"
          list2="Lack of Resources"
          list3="Mismanaged Time Schedules"
          list4="Financial Constraints"
          list5="Demotivation"
          list6="Delayed Creativity Process"
          list7="Delayed Writing Process"
          list8="Continuous Revisions"
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
          btn3="(855) 500 0057"
        />

        {/* Talk To Our Experts! */}
        <Experts
          title={exprtSpan}
          text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />

        <div className='sliderImg'>
          <Strugglingwriters />
        </div>

        <Stopworrying
          title='Stop worrying about publishing books!'
          subtitle={posdata}
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />


        {/*  Comprehensive */}
        <div className={windowWidth > 991 ? 'datacloudco' : ''}>
          <Comprehensive />
        </div>

        {/* Customersatisfaction */}
        <Customersatisfaction />

        {/* Why Choose book writing expert? */}
        <Whychoosebook
          title="Why Choose Book Writing Expert?"
          text="We are well aware of unique content creation requirements for each client. With a team equipped with a wide array of expertise, experiences and knowledge, we are always an author’s top preference. Book Writing Expert will simplify the Writing, Editing, Publication and Marketing needs for you. Our collaboration would be transparent and hassle-free, reducing all the intricacies from your end. We only deliver content that is remarkable, genuine and original."
          whychoose={whychoose}
        />

        {/* Talk To Our Experts! */}
        {/* <Experts
          title={exprtSpan}
          text="Hit us a message, or give us a call, and make the most of our Professional Ghostwriters."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        /> */}


        <div className='sliderImg2'>
          <Onestepsolutions />
        </div>


        {/* Stopworrying */}
        <div className='dataSetCo'>
          <Stopworrying
            title='Stop worrying about publishing books!'
            subtitle={posdata}
            btn1='Get a free Proposal'
            btn2='Talk to an expert'
          />
        </div>

        {/* Talk To Our Whatourclients! */}
        <Whatourclients />

        {/* Got a Story */}
        <Gotastory />

        {/* Talk To Our Requestafreequote! */}
        <Requestafreequote />

      </main>
    </>
  )
}
