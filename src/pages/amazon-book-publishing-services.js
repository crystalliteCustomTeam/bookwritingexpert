import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
// components
import homebannerlogos from "/public/images/amazonbookpublishing/logos.png";
import homebanlogos2 from "/public/images/amazonbookpublishing/logosTwo.png";
import ServiceBanner from "../../components/ServiceBanner";
import ServicesPartners from "../../components/ServicePartners";
import Partners from "../../components/Partners";
import ServicesPublishing from "../../components/ServicesPublishing";
import PublishProcess from "../../components/PublishProcess";
import DiveStories from "../../components/DiveStories";
import WhyChoose from "../../components/ServiceWhyChoose";
import Services from "../../components/Services";
import RequestQuote from "../../components/RequestQuote";
import OurServices from "../../components/OurServices";
import Publications from "../../components/Publications";
import ContactUs from "../../components/ContactUs";
// Images
import mission1 from "/public/images/mission/1.png";
import mission2 from "/public/images/mission/2.png";
import mission3 from "/public/images/mission/3.png";

import Contact from "./contact";
import Stopworrying from "../../components/Stopworrying";
import Comprehensive from "../../components/Comprehensive";

const amazonbookpublishingservices = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const BannerSubText = (
    <span>Ensuring Worldwide Publication of your Stories</span>
  );

  const newSpan = (
    <div className="font55 fw700 color-white font-f hero-span linh2">
      <h1 className="font55 fw700 textdocationnone color-blue hover d-inline">
        Amazon Book Publishing Services{" "}
      </h1>
      To Our Struggling Authors
    </div>
  );

  const desc = (
    <span>
      Is your talent going unnoticed due to problems in publishing? Not anymore!
      We <br className="d-lg-block d-none" /> have solutions to your problems!
    </span>
  );

  const publishing = "Our Recent Publishing";

  const publishDesc =
    "Dive into the latest literary treasures with our recent collections.";

  const discuss = <span>LET'S DISCUSS</span>;

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

  const posdata = (
    <span>
      Let Our Best{" "}
      <Link
        className="dblockmobile textdocationnone color-blue hover fw700"
        href="/book-publishing-services"
      >
        Amazon Kindle Direct Publishing (KDP)
      </Link>
      Service Providers Handle All Your Publishing Troubles!
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

  return (
    <>
      <ServiceBanner
        subtext={BannerSubText}
        title={newSpan}
        text={desc}
        discuss={discuss}
        homebannernum="Explore Examples of Our Custom Creations Below"
        homebanlogos={homebannerlogos}
        homebanlogos2={homebanlogos2}
        servicesBanner="servicesBanner"
        homebancan="newbannerclass"
      />

      <ServicesPartners />

      <ServicesPublishing title={publishing} desc={publishDesc} />

      <PublishProcess />

      <DiveStories />

      <Stopworrying
        title="Stop worrying about publishing books!"
        subtitle={posdata}
        btn1="Get a free Proposal"
        btn2="Talk to an expert"
      />

      {/*  Comprehensive */}
      <div className={windowWidth > 991 ? "datacloudco" : ""}>
        <Comprehensive />
      </div>

      <WhyChoose />

      <Services />

      <RequestQuote />

      <OurServices />

      <Partners />

      <Publications />

      <ContactUs />
    </>
  );
};

export default amazonbookpublishingservices;
