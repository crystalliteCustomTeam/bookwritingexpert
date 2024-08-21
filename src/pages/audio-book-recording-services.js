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
        Expand Your Reach
      </Link>{" "}
      With High-Quality
      <br /> Audiobook Recording Services!
    </h1>
  );
  const discuss = <span>LET'S DISCUSS</span>;

  const bannertext = [
    {
      title: newSpan,
      pra: "With a 95% success rate in sales and audience engagement, we can help you reach new audiences with our high-quality audiobook creation services. We manage everything from recording to post - production and distribution, eliminating the need to collaborate with multiple teams. As the best audiobook recording company, we offer the highest royalty rates and maximize your book’s impact across multiple platforms. ",
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
      Hear Your Words Come Alive with Our Premium <br />
      <Link
        className="textdocationnone color-blue hover"
        href="/audio-book-recording-services/"
      >
        Audiobook Production Services!
      </Link>
    </span>
  );
  const fine = [
    {
      img: mission1,
      title: "Preparation",
      text: "Our process begins with thorough preparation to ensure the perfect match between your book and its narrator. As a leading audiobook recording company, we have access to a network of thousands of narrators to find the voice that best fits your story and industry. If you prefer to narrate yourself, our experienced audiobook producer will help you plan recording sessions. Using tools like Pozotron, we flag words and pronunciations that may pose difficulties, providing recorded pronunciations to aid in accurate delivery.",
      class: "fintop",
    },

    {
      img: mission2,
      title: "Recording",
      text: "In our state-of-the-art recording studio, we focus on perfecting your narration. Our director works closely with you to get your voice up to the mark, guiding you through accurate pronunciation and optimal pacing. We capture your best performance, making your narration engaging and professional to achieve the best business results for you!",
      class: "fintop",
    },

    {
      img: mission3,
      title: "Post Production and Launch",
      text: "In post-production, our editing engineer adjusts pacing and removes background pops and distracting noises. Our QC engineer reviews the audiobook to ensure edits are seamless and audible. If needed, additional pickups and re-masters are completed. The final audio files undergo a thorough review process before going live within weeks. After launch, we provide sales reports to track your audiobook’s performance.",
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
          Audiobook Recording Services - Book Writing Experts
        </title>
        <meta
          name="description"
          content="Book Writing Experts is a leading audiobook recording
company that offers top-quality services to expand your book reach and
engage listeners worldwide!"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Audiobook Recording Services - Book Writing Experts"
        />
        <meta
          property="og:description"
          content="Book Writing Experts is a leading audiobook recording
company that offers top-quality services to expand your book reach and
engage listeners worldwide!"
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

      {/* Stopworrying */}
      <div className="dataSetCo">
        <Stopworrying
          title2={dateset}
          subtitle3="With our world-class approach, we can help you transform your manuscript into a listening masterpiece!"
          btn1="Get a free Proposal"
          btn2="Talk to an expert"
        />
      </div>

      <div className={`${styles.finetoothedbook} customizedbook`}>
        <Container>
          <Row>
            <h3 className="color-lightgray   font25   t-center font-f mb-2">
              From Script to Studio
            </h3>

            <h2 className="font50 font-f fw500 colortextgrey t-center pb-2">
              The Process Behind Our Audio  <br /> Book Recording Services
            </h2>
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
        title="Who Should Consider Professional Audiobook Recording Services?"
        text="Authors of both fiction and non-fiction can greatly benefit from our audiobook production
            services. Working with a reputable audiobook recording company and utilizing our audiobook
            services for hire allows you to extend your reach to a larger audience. If you prefer to narrate
            your own story, our professional services can accommodate that. Additionally, authors who
            embrace the latest in technology and accessibility will find our services invaluable in making
            their work widely accessible."
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

      <div className="datacloud">
        <Aspiring
          title="Why Hire Audiobook Recording Services For Your Next Project?"
          text="Smart authors know that 67% of audiobook listeners say they “read” more with audiobooks than
                traditional books. With busy lifestyles, people enjoy audiobooks while commuting, exercising, or
                doing chores. Plus, you can reach the visually impaired audience and expand globally, offering
                books in native languages or English fluently. With increased engagement, a growing market,
                multiple distribution channels, and higher royalties, hiring top audiobook recording services is a
                smart move for your next project."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />
      </div>
    </>
  );
};

export default audioBookRecordingServices;
