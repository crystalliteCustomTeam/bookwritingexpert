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

const blogWritingService = () => {
  const text = <span>We write, market, and review books of all kinds.</span>;
  const subtext = <span> Profit from our wide range of book publication styles and forms to secure your position as a book writing guru. In addition to publishing children's books, we are among the top Amazon publishing service suppliers.</span>;

  const newSpan = <h1 className='font50 fw700 color-white font-f hero-span'>Impactful <Link className='textdocationnone color-blue hover' href="/blog-writing-service/">Blog Writing Services</Link>  <br />for Achieving Content Excellence!</h1>;
  const discuss = <span>Let’s Connect!</span>

  const bannertext = [
    {
      title: newSpan,
      pra: 'Did you know that 80% of businesses see a 13x return on investment from blogging? We help you share your brand’s story, attract new leads, and increase brand awareness. Invest in our affordable blog writing services that enhance your authority in the industry and connect directly with consumers. Our expert-vetted writers deliver 100% unique, high-quality content, ensuring your blog is always fresh as well as optimized for search engines. Transform your content strategy with a blog writing company that delivers measurable results.',
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

  const dateset = <span className='fw500'>Professional Blog Writers for Hire to Help <br /> You Find Your

    Brand’s Voice!
  </span>

  const fine = [

    {
      img: mission1,
      title: 'Get Unique and Fresh Ideas Every Time',
      text: 'Our specially-trained writers bring creativity and originality to every project, ensuring zero plagiarism and no content duplication. As a leading blog writing agency, we deliver publish-ready, compelling content that keeps your blog vibrant and engaging. With professional blog writers, you’re guaranteed fresh ideas that captivate your audience every time.',
      class: 'fintop',


    },

    {
      img: mission2,
      title: 'Keep Your Content Confidential and Secure',
      text: 'As a top-grade blog writing company, we guarantee 100% confidentiality for all our clients. Throughout the content creation process, your information remains secure, and you retain full authorship rights. Trust our professional blog writing services to protect your content and ensure your peace of mind.',
      class: 'fintop',
    },

    {
      img: mission3,
      title: 'Stand Out from the Crowd with Exceptional Content',
      text: "In various industries and business areas, our writer's skills, knowledge, and experience make every word count. Professional writers ensure your content is exceptional, helping your brand stand out from the competition and capture your audience's attention.",
      class: 'fintop',
    },

  ]
  const websiteSchemaBlogWritingServices = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Blog Writing Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/blog-writing-service",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  const professionalServiceSchemaBlogWritingServices = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Blog Writing Services | Book Writing Experts",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
    "url": "https://www.bookwritingexperts.com/blog-writing-service",
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
  const corporationSchemaBlogWritingServices = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Blog Writing Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/blog-writing-service",
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
        <title>Expert Blog Writing Services - Book Writing Experts</title>
        <meta name="description" content="Looking to achieve content excellence with your blogs?
Look no further than our blog writing company. We can write the best blogs
for you in no time." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Expert Blog Writing Services - Book Writing Experts" />
        <meta property="og:description" content="Looking to achieve content excellence with your blogs?
Look no further than our blog writing company. We can write the best blogs
for you in no time." />
        <meta property="og:url" content="/book-publishing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
        <meta property="article:modified_time" content="2023-03-31T12:04:48+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="DC.title" content="blog writing services, blog writing service, blog writing company" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaBlogWritingServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaBlogWritingServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaBlogWritingServices) }}
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
          subtitle3='Our expert blog post writing services focus on your industry, providing pertinent information for
        your audience. We create content aligned with your marketing persona, making it attention-
        grabbing and highly effective.'
          btn1='Get a free Proposal'
          btn2='Talk to an expert'
        />
      </div>

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row >
            <h3 className='color-lightgray   font25   t-center font-f mb-2'>Our Approach</h3>

            <h2 className='font50 font-f fw500 colortextgrey t-center pb-2'>Why You Need Our Experts For <br /> <Link className='textdocationnone color-blue hover' href="/blog-writing-service/">Blog Writing Service</Link></h2>
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
        title="Get 5X More Engagement with Our Expert Blog Post
        Writing Services!"
        text='Blogging results in 67% more leads than non-blogging sites and offers 97% more links. Our blog
        writers deliver value-driven content that strengthens your brand voice and effectively targets
        your audience. Additionally, blogging can double your email traffic by 50%, driving significant
        engagement.'
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
          title='Stand Out Online and Achieve Higher Rankings With the
            Best Blog Writing Services!'
          text='We, as one of the leading blog writing companies, ensure your content ranks higher on search
            engines. Our attention-grabbing blog posts target your audience and integrate keyword
            searches seamlessly into your business plan and editorial calendar. We transform complex
            topics into engaging information, enhancing your marketing persona and effectively promoting
            your goods or services. Trust our tactics to boost your online presence and drive success..'
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"

        />
      </div> 
    </>
  )
}

export default blogWritingService