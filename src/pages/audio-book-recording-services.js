import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
// images
import homebannerlogos from "/public/images/bannerimages/logos.png";
import publishmybook from "/public/images/selfpublishingservices/4.jpg";
// components
import Banner from "../../components/Banner";
import Dowecome from "../../components/Dowecome";
import Stopworrying from "../../components/Stopworrying";
import Aspiring from "../../components/Aspiring";
import Whatourclients from "../../components/Whatourclients";
import Selfpublishing from "../../components/Selfpublishing";
import Lululogos from "../../components/Lululogos";
import Customersatisfaction from "../../components/Customersatisfaction";
// css
import styles from "@/styles/Whybookpublishing.module.css";
import mission1 from "/public/images/mission/1.png";
import mission2 from "/public/images/mission/2.png";
import mission3 from "/public/images/mission/3.png";
import Finetoothedbook from "../../components/Finetoothedbook";

const audioBookRecordingServices = () => {
  const newSpan = (
    <h1 className="font50 fw700 color-white font-f hero-span">
      <Link
        className="textdocationnone color-blue hover"
        href="/audio-book-recording-services/"
      >
        Audiobook Recording Services
      </Link>{" "}
      to Add a Touch <br /> of Captivity to Your Manuscripts’ Words!!
    </h1>
  );
  const discuss = <span>LET'S DISCUSS</span>;

  const bannertext = [
    {
      title: newSpan,
      pra: "Audiobooks are an investment that pays off in the longer run. Audiobook recording services help you get your book on audio, making it easier for people to enjoy while they’re on the go. If you’re looking for a professional and high-quality audiobook recording service, look no further than Book Writing Experts. We offer the latest technology and equipment to ensure that your book is recorded to the highest standards possible. Call us right away and learn more about our best audiobook service. ",
      discuss: discuss,
      homebannernum: "(855) 500 0057",
      banlogo: homebannerlogos,
      banners: "bookpublishingservices",
      process: "OUR PROCESS, IN A MINUTE",
    },
  ];

  const geta = (
    <span>
      The Perfect{" "}
      <Link
        className="textdocationnone color-blue hover"
        href="/audio-book-recording-services/"
      >
        Audiobook <br /> Recording Services
      </Link>{" "}
      That <br /> Control The Narrative!
    </span>
  );

  const work = (
    <>
      <span>
        Audiobook recording brings a plethora of perks to not only authors, but
        business owners as well. Owing to the audiobook, authors provide an easy
        way for readers to consume content and reach a wider audience.
      </span>{" "}
      <br /> <br />{" "}
      <span>
        To cut a long story short, by having their book turned into an
        audiobook, an author can connect with their audience in a new way and
        create a deeper connection with them. Needless to say, audiobook service
        is simply a lot of fun to make, and we offer the chance to bring your
        book to life in a whole new way.
      </span>{" "}
      <br /> <br />{" "}
      <span>
        The story doesn’t end here. Audiobook recording services can be a
        valuable asset for businesses, too, as they can provide a way to reach a
        wider audience with important and timely information. Audiobooks can
        also be produced relatively quickly and easily, making them ideal for
        businesses that need to get their message out fast. Moreover, audiobook
        recordings can be used as a training tool for employees or to provide
        customers with information about a product or service. Overall,
        audiobook recording services can be valuable to any business.
      </span>{" "}
      <br /> <br />{" "}
      <span>
        So, if you’re an author looking to reach a wider audience, build your
        brand, and have a lot of fun, then recording an audiobook is a great
        option!
      </span>
    </>
  );

  const dateset = (
    <span className="fw500">
      Customized{" "}
      <Link
        className="textdocationnone color-blue hover"
        href="/audio-book-recording-services/"
      >
        Audiobook Production Service
      </Link>{" "}
      <br /> For Your Ideal Prospects!
    </span>
  );
  const fine = [
    {
      img: mission1,
      title: "Consultation with the Author!",
      text: "To provide the best audiobook service, we consult with the author or publisher to get a clear understanding of what is required. This includes discussing the project in detail, as well as any specific requirements that may need to be met. Pre-production is all about preparing for the actual recording. Things like selecting the right narrator, editing the book, and creating a recording schedule are the cornerstone of this step.",
      class: "fintop",
    },

    {
      img: mission2,
      title: "Recording Kick-started!",
      text: "Here begins the actual recording process. This takes place in a professional studio, where we use high-quality equipment to record the audio. Once the recording is complete, it will be edited and polished by a team of experts before being submitted to the author or publisher.",
      class: "fintop",
    },

    {
      img: mission3,
      title: "You Collect What You Exactly Dreamt Of!",
      text: "Finally, the audiobook will be delivered to the customer in the format of their choice. No matter what the delivery method, the customer can be sure that they will receive a high-quality recording that they will be able to enjoy for years to come. Post-production is the final step and includes editing the recorded audio, adding music and sound effects, and mastering the finished product.",
      class: "fintop",
    },
  ];
  const websiteSchemaAudioBookRecordingServices = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Audiobook Recording Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/audio-book-recording-services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  const professionalServiceSchemaAudioBookRecordingServices = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Audiobook Recording Services | Book Writing Experts",
    "image": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg",
    "url": "https://www.bookwritingexperts.com/audio-book-recording-services",
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
  const corporationSchemaAudioBookRecordingServices = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Audiobook Recording Services | Book Writing Experts",
    "url": "https://www.bookwritingexperts.com/audio-book-recording-services",
    "logo": "https://www.bookwritingexperts.com/_next/static/media/logo.015f1291.svg"
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Get Your Book on Amazon KDP with Top-Rated Book Publishing Services
        </title>
        <meta
          name="description"
          content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get Your Book on Amazon KDP with Top-Rated Book Publishing Services"
        />
        <meta
          property="og:description"
          content="Looking for a reliable Book Publishing Company? BWE can help you get your book published using Amazon Publishing Services and Kindle Direct Publishing. Call us now to bring your book to life today!"
        />
        <meta property="og:url" content="/book-publishing-services" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/33273cf2-6458-4ba5-0f78-ec679c919a00/public" />
        <meta
          property="article:modified_time"
          content="2023-03-31T12:04:48+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <link rel="icon" href="/favicon.svg" />

        <meta
          name="DC.title"
          content="audiobook recording services, audiobook recording service, audiobook recording company"
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaAudioBookRecordingServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchemaAudioBookRecordingServices) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchemaAudioBookRecordingServices) }}
        />
      </Head>

      {/* banner components */}

      {bannertext.map((item, i) => (
        <Banner
          key={i}
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
      ))}

      {/* Dowecome */}
      <Dowecome title={geta} text={work} Dowecome="publishmybook" />

      {/* Makestories */}
      {/* <div className='dataset sliderImg'>
        <Makestoriesnew
          title='Our Latest Book Publishing Projects'
          para='Let Our Book Publishing Team Help You'
        />
      </div> */}

      {/* Bookpublishingservicesweoffer */}
      {/* <Bookpublishingservicesweoffer /> */}

      {/* <Ourprocess
        title='What Is Our Process of Publishing a Book?'
        text='Without compromising the quality of the finished product, we have developed a complex workflow procedure. We accomplish this through a thorough process that involves informing our clients at each project stage and requesting approvals. This makes the customer more aware of what`s happening at each stage. These six processes, which are listed below, comprise our self-publishing process.'
        heading1='Manuscript Submission'
        para1='The writer contacts us for submission of their full-length manuscript, while submitting, we discuss our publishing rules and sign the contract.'
        num1='01'

        heading2='Peers Review'
        para2='Our experienced editors then review the manuscript and make the required changes with the writer’s permission.'
        num2='02'

        heading3='Formatting and Typesetting'
        para3='After the manuscript is reviewed by editors, our experts do the formatting and add images.'
        num3='03'

        heading4='Book Production'
        para4='We design the first copy of the book and take reviews from the writer. The rest of the books are produced on the same pattern while keeping all the important aspects into consideration.'
        num4='04'

        heading5='Marketing, Publishing, and Distribution'
        para5='Before publishing, we spread awareness about the book to create demand. And Voila! The book is published now!'
        num5='05'
      /> */}

      {/* Stopworrying */}
      <div className="dataSetCo">
        <Stopworrying
          title2={dateset}
          subtitle3="Do You Want To Increase Readers’ Engagement and Customer Retention?"
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
        />
      </div>

      {/* <section className={styles.publicservices}>
        <Container>
          <Row>
            <Col>
              <h2 className='color-blue fw700 font50 font-f t-center'>Why Choose Our Amazon Publishing Services?</h2>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* Selfpublishing */}

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row>
            <h2 className="color-lightgray   font25   t-center font-f mb-2">
              Our Approach
            </h2>

            <p className="font50 font-f fw500 colortextgrey t-center pb-2">
              Our Three-Step Process Brings <br /> The Perfection To Have Ears
              On!
            </p>
          </Row>

          <Row className="gy-5">
            {fine.map((item, i) => (
              <Finetoothedbook
                key={i}
                title={item.title}
                text={item.text}
                classtop={item.class}
                img1={item.img}
                btn={item.btn}
              />
            ))}
          </Row>
        </Container>
      </div>
      <Selfpublishing
        title="Our Team Of Experienced Professionals Will Help Your Book Sound The Best!"
        text="We make it easy for you to capture your story and share it with the world. Our professional audiobook recording services will help you bring your words to life, and our engaging tone of voice will keep your listeners hooked until the very end. Share your story with the world, and let them hear it in your own words with the unbeatable audiobook production service."
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={publishmybook}
        whychooseclass="marketyourbook"
      />

      {/* Whychoosebookwritingcube */}
      {/* <Whychoosebookwritingcube
        title='Our Willingness To Publish Knows No Bounds!'
        text={text}
        subtext={subtext}
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={typeofbooks}
        whychooseclass="marketyourbook"
      /> */}

      {/* Selfpublishing */}
      {/* <Selfpublishing
        title='Want Articles That Boost Engagement And Expand Your Reach?'
        text='Connect with our experienced writers that have the knowledge of the latest industry trends to write gripping articles, paving the way to success for you!'
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={copy}
        whychooseclass="marketyourbook"
      /> */}

      {/* Whychoosebookwritingcube */}
      {/* <Whychoosebookwritingcube
        title='All Of Your Burning Book Marketing Questions- Answered!'
        text='Not sure how to promote or organize your next book debut? You can select the marketing service at Book Writing Experts based on what you want to achieve, and each of our services is concentrated on a few key areas to help you best promote your book.'
        subtext='Whether you are an experienced writer or a beginner, our advice and marketing tactics will help you build a global internet presence. Our book marketing experts will assist your book and brand in achieving the success they deserve.'
        number="(855) 500 0057"
        discuss="LET'S DISCUSS"
        image={marketyourbook}
        whychooseclass="marketyourbook"
      /> */}

      {/* Customersatisfaction */}
      <Customersatisfaction />

      {/* Talk To Our Whatourclients! */}
      <Whatourclients />

      {/* Lululogos components */}
      <div>
        <Lululogos />
      </div>

      {/* Aspiring */}

      <div className="datacloud">
        <Aspiring
          title="Book Cover Designs That Stand Out"
          text="We are a fantastic choice for cover designs, page layouts, and book designs. We have a group of qualified graphic designers who have created dozens of book covers and page layouts. Our designers will work with you to ensure that your book and cover are supplied according to specifications using all of the information they have. To address any potential technical issues, we offer efficient maintenance for the given files."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>
    </>
  );
};

export default audioBookRecordingServices;
