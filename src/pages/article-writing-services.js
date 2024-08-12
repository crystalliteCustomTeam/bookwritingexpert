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
  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Expert <Link className='textdocationnone color-blue hover' href="/article-writing-services">Article Writing Services</Link> To <br /> Engage Your Target Audience</h1>;
  const discuss = <span className='text-transform'>Get a Free Consultation</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'Get high-quality, 100% original articles custom-written to meet your specific requirements. Our skilled writers, with expertise in over 40 different areas in article writing, ensure that your content is accurate, engaging, and perfectly tailored to your needs. As a premium-grade article writing company, we thoroughly research and expertly edit each piece, customizing it to resonate with your target audience. Trust us to deliver audience-centric articles that make a significant impact across different platforms.',
      discuss: discuss,
      homebannernum: '(855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',
    }
  ]
  const geta = <span>Our Talented Writers Know The Art Of Turning Your Thoughts Into Compelling Pieces!</span>

  const work = <span>At Book Writing Experts, our team of brilliant writers has the knowledge of the latest tricks and techniques that go into creating article pieces that increase engagement and boost a brand’s reach. Many of our writers have been behind some of the best-selling novels in recent years. Our aim is to help struggling authors make their mark in the ever-lasting and evolving industry of books. By collaborating with writers at Book Writing Experts, you unlock the true potential of your talent and achieve your goals!</span>

  const dateset = <span className='fw500'><Link href="/article-writing-services/" className='textdocationnone color-blue hover'>Article Writers</Link> for Hire Who Understand <br /> Your Industry
    and Audience</span>

  const fine = [
    {
      img: mission1,
      title: 'Expertise on Demand',
      text: 'Our article writers are experienced & field experts, so you get articles that are engaging, accurate, and full of information.Be it blogs, websites, newsletters, or brochure content, our writers can produce top- notch copy on your timeline.',
      class: 'fintop',
    },
    {
      img: mission2,
      title: 'Converting Content',
      text: 'We provide the best article writing services that ensure all content is unique and customized to your brand voice. To drive conversions effectively, every article is fashioned to reflect the unique selling points of your brand, making your website a go-to resource for your audience.',
      class: 'fintop',
    },

    {
      img: mission3,
      title: 'Unlimited Revisions',
      text: 'As one of the top article writing services, our commitment to excellence means that we offer unlimited revisions, working closely with you to satisfy your needs and support your business growth.',
      class: 'fintop',
    },
  ]

  const selfpublishingDesc = <span>Content is the real king for a high SERP. High-quality, fresh content enhances your position on SERP, drives more traffic, and increases business. Our article writers are skilled in developing engaging, sales-oriented content while catering to your exact specifications, providing quality pieces, with deep industry knowledge. < br /><br /> Hire top-quality article writers who are great at fluently integrating keywords in a very readable way that attracts more readers/customers to your website. We care about your budget and the quality you seek. Let us help you with our affordable article writing services to grow your business with impactful content.</span>

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Top Article Writing Services - Book Writing Experts</title>
        <meta name="description" content="Hire the best article writing company and get your
magical articles written that can engage your target audience in no time.
Call us now!" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top Article Writing Services - Book Writing Experts" />
        <meta property="og:description" content="Hire the best article writing company and get your
magical articles written that can engage your target audience in no time.
Call us now!" />
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
          subtitle3='Experience stress-free content creation with our high quality article writing services. Share your requirements and our expert writers will handle everything from topic selection to delivering polished drafts. Enjoy clear communication, best articles, on-time delivery, and affordable pricing.'
          btn1='Get a free Proposal'
          btn2='Get a Free Consultation'
        />
      </div>

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h3 className='color-lightgray   font25   t-center font-f mb-2'>Get High-Quality Results</h3>

            <h2 className='font50 font-f fw500 colortextgrey t-center pb-2'>100% <Link className='textdocationnone color-blue hover fw700' href='/article-writing-services/'>Original and Custom Content Guaranteed</Link> <br className='d-none d-xl-block' /> from Your Go-To Article Writing Company!</h2>
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
        title='Our Article Writers Produce Sales-Driven Content That Converts!'
        text={selfpublishingDesc}
        number="(855) 500 0057"
        discuss="Get a Free Consultation"
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
          title='Experience Excellence With A Leading Article Writing
Company!'
          text='When you partner up with our article writers, you can be certain of 100% original content,
custom-written by an expert. Our content is professionally proofread and edited to contain zero
mistakes. We make any necessary changes until you are happy with the final results. Our 24/7
customer support ensures that you are always informed about the progress of your content. We
believe in open communication and collaboration to ensure that the content we deliver meets
your expectations and achieves your desired impact.'
          number="(855) 500 0057"
          discuss="Get a Free Consultation "
        />
      </div>
    </>
  )
}

export default articleWritingServices