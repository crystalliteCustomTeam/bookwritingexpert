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
import Major from '../../components/Major'
import Cta from '../../components/Cta'
// css
import styles from '@/styles/Whybookpublishing.module.css'



const Bookpublishingservices = () => {

  const bannertext = [
    {
      title: (
        <>
          <h1 className='font50 fw300 text-white font-f hero-span'>It’s Time to Convert Your Literary Dreams To Reality With Our Diverse Range of <Link className='textdocationnone fw700 color-blue hover' href="/book-publishing-services/">Book Publishing Services</Link>.</h1>
        </>
      ),
      pra: (
        <> Are you facing complications regarding <Link className='textdocationnone text-white hover' href="/book-publishing-services/">book publishing</Link>? Break free from the challenges of <Link className='textdocationnone text-white hover' href="/book-publishing-services/">book publishing</Link> with the help of Book Writing Experts! </>
      ),
      discuss: (<> Hire The Best Book Publishers Today! </>),
      homebannernum: 'Call Us at (855) 500 0057',
      banlogo: homebannerlogos,
      banners: 'bookpublishingservices',
      process: 'OUR PROCESS, IN A MINUTE',



    }
  ]

  const work = <span>Your work is over after creating a masterpiece. Let us take the lead from here. Our <Link className='colortextgrey textdocationnone hover' href='/book-publishing-services/'> Amazon publishing services </Link> include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!</span>

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookwritingexperts.com/book-publishing-services"
    },
    "headline": "Book Publishing Services",
    "description": "book publishing services, amazon publishing services, amazon book publishing services, amazon kdp, kindle direct publishing services, amazon kdp publishers, book publishing company, best book publishing services, professional book publishing services, top book publishing services, best book publishing company, top book publishing company, leading book publishing company, top amazon publishers, amazon publishers",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",  
    "author": {
      "@type": "Organization",
      "name": "book publishing services, amazon publishing services, amazon book publishing services, amazon kdp, kindle direct publishing services, amazon kdp publishers, book publishing company, best book publishing services, professional book publishing services, top book publishing services, best book publishing company, top book publishing company, leading book publishing company, top amazon publishers, amazon publishers",
      "url": "https://www.bookwritingexperts.com/"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "book publishing services, amazon publishing services, amazon book publishing services, amazon kdp, kindle direct publishing services, amazon kdp publishers, book publishing company, best book publishing services, professional book publishing services, top book publishing services, best book publishing company, top book publishing company, leading book publishing company, top amazon publishers, amazon publishers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
      }
    },
    "datePublished": ""
  }


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

        <meta name="DC.title" content="book publishing services, amazon publishing services, amazon kdp, book publishing company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
        Dowecome="publishmybook"
      />

      {/* Major */}
      <Major />

      {/* Cta */}
      <Cta />

      {/* Makestories */}
      <div className='dataset sliderImg'>
        <Makestoriesnew
          title={<> Dwell into Our Recent <Link className='textdocationnone color-blue hover' href="/book-publishing-services/">Book Publishing</Link> Projects! </>}
          para={<> Allow our professional <Link className='textdocationnone textcolor hover' href="/book-publishing-services/">book publishers</Link> to assist you in your literary endeavors. </>}
        />
      </div>

      {/* Bookpublishingservicesweoffer */}
      <Bookpublishingservicesweoffer />

      <Ourprocess
        title={<> How Does Our Incredibly Crafted <Link className='textdocationnone color-blue hover' href="/book-publishing-services/">Book Publishing</Link> Journey Unfold? </>}
        text='Join us on a streamlined journey from manuscript to masterpiece. Our process includes refining narratives, crafting compelling visuals, meticulous book preparation, and handling distribution, marketing, and copyright tasks. Discover the elegance of our efficient book publishing process, designed to make your literary vision a global reality.'
        heading1='Manuscript Assessment'
        para1='Your journey begins with us diving into your raw manuscript. Our dedicated team diligently assesses your work, identifying its strengths and areas for improvement.'
        num1='01'

        heading2='Editing and Refinement'
        para2={<> Your words are then entrusted to our skilled <Link className='textdocationnone color-lightgray hover' href="/book-editing-services/">book editors</Link>, who meticulously refine your narrative, ensuring optimal clarity, coherence, and compelling storytelling. </>}
        num2='02'

        heading3='Design and Layout'
        para3='Once the editing phase is complete, our talented designers step in. They artistically bring your book to life, creating an engaging layout and an impactful cover that echoes your unique voice.'
        num3='03'

        heading4='Book Preparation'
        para4='We then prepare your book for publishing. Every detail is scrutinized to align with industry standards, maintaining the highest level of quality.'
        num4='04'

        heading5='Distribution, Marketing, and Copyright'
        para5='Here comes the moment you wait for the most! Your masterpiece is finally ready to reach the masses. We navigate the complexities of distribution, craft strategic marketing plans, and register the copyright, ensuring your book makes its mark in the literary world.'
        num5='05'
      />


      {/* Stopworrying */}
      <div className='dataSetCo'>
        <Stopworrying
          title2={<> Hire Our <Link className='textdocationnone fw700 color-blue hover' href='/book-publishing-services/'>Book Publishing Company</Link> to Bring Your Literary Masterpiece to Life! </>}
          subtitle3='Are you looking for a publishing partner? Well, Book Writing Experts will inspire you in your literary adventures. We are here to help you transform your literary dreams into reality. At our publishing company, we believe in nurturing and supporting talented authors like you, and we are dedicated to bringing your masterpiece to the bookshelves.'
          subtitle4='So, what’s stopping you from reaching your goals to become an aspiring novelist? '
          btn1='Get a free Proposal'
          btn2='Looking For a Publishing Partner? Hire Us Today!'
        />
      </div>



      <section className={styles.publicservices}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>
                Why Choose Our <Link className='textdocationnone color-blue hover' href='/book-publishing-services/'>Amazon Publishing Services</Link>?
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Selfpublishing */}
      <Selfpublishing
        title='Prime-Quality and Expertise'
        text={<> Our <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>Amazon Publishing Services</Link> are backed by a team of experienced professionals who have in-depth knowledge and expertise in the publishing industry. We are committed to delivering high-quality content that meets industry standards and exceeds your expectations. With our services, you can trust that your books will be handled with care and precision. </>}
        number="(855) 500 0057"
        discuss="Consult With Our Expert Team Now!"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />

      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Enhanced Visibility and Reach'
        text={<> Choosing our <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>Amazon Publishing Services</Link> opens up new avenues for your book to reach a wider audience. With Amazon's vast customer base and powerful marketing tools, we can help boost the visibility of your book, increase its discoverability, and maximize its potential for success. Our strategies are designed to enhance your book's presence and attract more readers. </>}
        number="(855) 500 0057"
        discuss="Let’s Discuss Your Book Publishing Project"
        image={typeofbooks}
        whychooseclass="marketyourbook"
      />

      {/* Selfpublishing */}
      <Selfpublishing
        title='Streamlined Publishing Process'
        text={<> We at Book Writing Experts understand the importance of a smooth and efficient <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>book publishing</Link> process. With our services, you can expect a streamlined workflow that simplifies the publishing journey. From manuscript formatting and editing to cover design and eBook conversion, we handle every aspect professionally, allowing you to focus on your writing while we take care of the technicalities. </>}
        number="(855) 500 0057"
        discuss="Chat Now!"
        image={copy}
        whychooseclass="marketyourbook"
      />


      {/* Whychoosebookwritingcube */}
      <Whychoosebookwritingcube
        title='Comprehensive Marketing Support'
        text={<> Our <Link className='textdocationnone textcolor hover' href='/book-publishing-services/'>Amazon Publishing Services</Link> go beyond just publishing your book. We offer comprehensive marketing support to help you build a strong author platform and promote your work effectively. Our marketing strategies include targeted advertising, social media campaigns, email marketing, and more, tailored to your specific audience and genre. We strive to maximize your book's exposure and generate buzz in the competitive publishing landscape. </>}
        number="(855) 500 0057"
        discuss="Click On This Chat Button and Get Our Assistance"
        image={marketyourbook}
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
          title={<> Choose Our <Link className='textdocationnone color-blue fw700 hover' href='/book-publishing-services/'>Book Publishing Company</Link> and Expand Your Reach in the Book Realm! </>}
          text={<> Ready to turn the page on your publishing dreams? Let us write your success story together! Choose our <Link className='textdocationnone color-lightgray hover' href='/book-publishing-services/'>book publishing company</Link> and let your words come to life. Start your literary journey now! </>}
          number="Call at (855) 500 0057"
        />

      </div>


    </>
  )
}

export default Bookpublishingservices