import Head from "next/head";
import Link from "next/link";
import homebannerlogos from "/public/images/bannerimages/logos.png";
import homebanlogos2 from "/public/images/bannerimages/homebannerlogos2.webp";
import whychoose from "/public/images/whychoosebooks/bg-img.webp";
// import components
import dynamic from "next/dynamic";

const Homebanner = dynamic(() => import("../../components/Homebanner"));
const Partners = dynamic(() => import("../../components/Partners"));
const Whychoosebook = dynamic(() => import("../../components/Whychoosebook"));
const Gotastory = dynamic(() => import("../../components/Gotastory"));
const Experts = dynamic(() => import("../../components/Experts"));
const Whatourclients = dynamic(() => import("../../components/Whatourclients"));
const Requestafreequote = dynamic(() =>
  import("../../components/Requestafreequote")
);
const Stopworrying = dynamic(() => import("../../components/Stopworrying"));
const Customersatisfaction = dynamic(() =>
  import("../../components/Customersatisfaction")
);
const Comprehensive = dynamic(() => import("../../components/Comprehensive"));
const Strugglingtogive = dynamic(() =>
  import("../../components/Strugglingtogive")
);
const Strugglingwriters = dynamic(() =>
  import("../../components/Strugglingwriters")
);
const Onestepsolutions = dynamic(() =>
  import("../../components/Onestepsolutions")
);
import { useState, useEffect } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to get window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const exprtSpan = (
    <span className="fw500 font50 color-white font-f t-center font-f mb-4">
      <span className="color-blue fw700">
        <Link
          className="dblockmobile color-blue hover textdocationnone"
          href="/"
        >
          Book Writing Experts
        </Link>
      </span>{" "}
      Is waiting for you to Ask for a{" "}
      <span className="color-blue fw700">
        <Link
          className="dblockmobile color-blue hover textdocationnone"
          href="/"
        >
          Professional Book Writer
        </Link>
      </span>
    </span>
  );

  const newSpan = (
    <h1 className="font50 fw700 color-blue font-f hero-span">
      {" "}
      <span className="">Your ONE-STOP</span>{" "}
      <Link className="dblockmobile textdocationnone color-blue hover" href="/">
        {" "}
        Book Editing And Publishing Service{" "}
      </Link>{" "}
      <span className="">Provider!</span>{" "}
    </h1>
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

  const discuss = <span>LET'S DISCUSS</span>;

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

      {imagesLoaded && (
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K994MT85"
            height="0"
            width="0"
            className="d-none"
          ></iframe>
        </noscript>
      )}

      <main>
        <Homebanner
          title={newSpan}
          text="We understand being an author is a challenging yet respectable profession, but not everybody is lucky enough to become one."
          discuss={discuss}
          homebannernum="(855) 500 0057"
          homebanlogos={homebannerlogos}
          homebanlogos2={homebanlogos2}
          bannershome="banner"
          homebancan="newbannerclass"
        />

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
          text="Hit us a message, or give us a call, and make the most of our <a href='https://www.bookwritingexperts.com/ghostwriting-services' class='textdocationnone text-white hover'>Professional Book Writers</a>."
          number="(855) 500 0057"
          discuss="LET'S DISCUSS"
        />

        <div className="sliderImg">
          <Strugglingwriters />
        </div>

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

        {/* Customersatisfaction */}
        <Customersatisfaction />

        {/* Why Choose book writing expert? */}
        <Whychoosebook
          title="Why Choose Book Writing Expert?"
          text="We are well aware of unique content creation requirements for each client. With a team equipped with a wide array of expertise, experiences and knowledge, we are always an author’s top preference. Book Writing Expert will simplify the Writing, Editing, Publication and Marketing needs for you. Our collaboration would be transparent and hassle-free, reducing all the intricacies from your end. We only deliver content that is remarkable, genuine and original."
          whychoose={whychoose}
        />
        
        <div className="sliderImg2">
          <Onestepsolutions />
        </div>

        {/* Stopworrying */}
        <div className="dataSetCo">
          <Stopworrying
            title="Stop worrying about publishing books!"
            subtitle={posdata}
            btn1="Get a free Proposal"
            btn2="Talk to an expert"
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
  );
}
