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

const articleWritingServices = () => {
  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Magical <Link className='textdocationnone color-blue hover' href="/article-writing-services">Article Writing Services</Link> That Cast <br /> A Spell on Your Target Readers!</h1>;
  const discuss = <span>LET'S DISCUSS</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'Words have an enchanting effect on people, which is why we offer professional article writing services to produce captivating articles that leave your readers wanting more. Our team of highly-skilled and talented article writers understands the importance of content when it comes to expanding your reach for greater success. Book Writing Experts aims to curate compelling pieces that aid your business’s success always!',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',
    }
  ]
  const geta = <span>Our Talented Writers Know The Art Of Turning Your Thoughts Into Compelling Pieces!</span>

  const work = <span>At Book Writing Experts, our team of brilliant writers has the knowledge of the latest tricks and techniques that go into creating article pieces that increase engagement and boost a brand’s reach. Many of our writers have been behind some of the best-selling novels in recent years. Our aim is to help struggling authors make their mark in the ever-lasting and evolving industry of books. By collaborating with writers at Book Writing Experts, you unlock the true potential of your talent and achieve your goals!</span>

  const dateset = <span className='fw500'><Link href="/article-writing-services/" className='textdocationnone color-blue hover'>Article Writing Services</Link> Aimed At Entertaining <br /> And Educating Your Ideal Readers!</span>

  const fine = [
    {
      img: mission1,
      title: 'Experienced Article Writers',
      text: 'Book Writing Experts’ Article Writers are familiar with the exact technique of adding flair to their articles, which enraptures your target audience every time. We come up with the greatest methods possible for our greatest clients!',
      class: 'fintop',
    },
    {
      img: mission2,
      title: 'Compelling Content',
      text: 'Our skilled writers work on unique and high-quality pieces according to our client’s requirements. All our content is plagiarism-free and error-free!',
      class: 'fintop',
    },

    {
      img: mission3,
      title: 'Quality Assurance',
      text: 'Before the content is delivered to our clients, we carry out thorough quality checks to ensure our work is polished to perfection just for you!',
      class: 'fintop',
    },
  ]
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Get Your Book on Amazon KDP with Top-Rated Book Publishing Services</title>
        <meta name="description" content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!" />

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

        <meta name="DC.title" content="article writing services, article writing service, article writing company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />





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
          subtitle3='Are You Looking For An Enthusiastic Writer To Convey Your Message To The World?'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h2 className='color-lightgray   font25   t-center font-f mb-2'>Our Approach</h2>

            <p className='font50 font-f fw500 colortextgrey t-center pb-2'>Our <Link className='textdocationnone color-blue hover fw700' href='/article-writing-services/'>Professional Article Writing Services</Link> Are <br /> Designed To Captivate Your Readers</p>
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
        title='Want Articles That Boost Engagement And Expand Your Reach?'
        text='Connect with our experienced writers that have the knowledge of the latest industry trends to write gripping articles, paving the way to success for you!'
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
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
          title='Book Cover Designs That Stand Out'
          text='We are a fantastic choice for cover designs, page layouts, and book designs. We have a group of qualified graphic designers who have created dozens of book covers and page layouts. Our designers will work with you to ensure that your book and cover are supplied according to specifications using all of the information they have. To address any potential technical issues, we offer efficient maintenance for the given files.'
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>
    </>
  )
}

export default articleWritingServices